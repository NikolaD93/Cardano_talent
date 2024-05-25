import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { supabase } from "@/config/supabaseClient";

export const NewsletterForm = () => {
  const formSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const { error } = await supabase
        .from("emails")
        .insert({ email: values.email });

      if (error) {
        toast.error(`${values.email} is already subscribed!`);
        console.log(error);
      } else {
        toast.success("Subscribed successfully!");
        form.reset();
      }
    } catch (err) {
      toast.error("An unexpected error occurred. Please try again.");
      console.error(err);
    }
  }
  return (
    <div className="flex relative z-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {form.formState.isSubmitting ? (
            <Button
              disabled
              className="bg-white rounded-full text-primary font-bold lg:w-[130px] h-[46px] lg:h-[56px] absolute right-[5px] bottom-[5px] transition duration-300 hover:bg-primary hover:text-white focus:bg-primary focus:text-white"
            >
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending
            </Button>
          ) : (
            <Button
              className="bg-white rounded-full text-primary font-bold lg:w-[130px] h-[46px] lg:h-[56px] absolute right-[5px] bottom-[5px] transition duration-300 hover:bg-primary hover:text-white focus:bg-primary focus:text-white"
              variant="ghost"
              type="submit"
            >
              Subscribe
            </Button>
          )}
        </form>
      </Form>
    </div>
  );
};

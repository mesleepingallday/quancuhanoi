"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IconCalendarMonth } from "@tabler/icons-react";
import { format } from "date-fns";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";
import { useState } from "react";
import { Textarea } from "./ui/textarea";

export default function BookingNow({ style = "", text = "Đặt bàn ngay!" }) {
  const { toast } = useToast();
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  const onSubmit = async (data) => {
    event.preventDefault();
    await handleSubmit((data) => setData(JSON.stringify(data)));
    console.log("Đặt bàn thành công", data);
  };

  return (
    <Dialog>
      <DialogTrigger className={style}>{text}</DialogTrigger>
      <DialogContent className="rounded-lg border-solid max-sm:scale-[0.8]">
        <div>
          <DialogHeader>
            <DialogTitle className="font-lora text-2xl ">
              Quý khách vui lòng nhập thông tin đặt bàn
            </DialogTitle>
          </DialogHeader>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-4 items-center gap-4 mt-5">
            <Label htmlFor="firstName" className="text-center">
              Họ và tên
            </Label>
            <Input
              id="firstName"
              {...register("fullName")}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4 mt-5">
            <Label htmlFor="phoneNumber" className="text-center">
              Số điện thoại
            </Label>
            <Input
              id="phoneNumber"
              {...register("phoneNumber")}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4 mt-5">
            <Label htmlFor="guestCount" className="text-center">
              Số khách
            </Label>
            <Input
              id="guestCount"
              {...register("guestCount")}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4 mt-5 w-full">
            <Label htmlFor="time" className="text-center">
              Thời gian
            </Label>
            <label className="col-span-3">
              <Input type="datetime-local" id="time" {...register("time")} />
            </label>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-5">
            <Label htmlFor="note" className="text-center mt-2">
              Ghi chú
            </Label>
            <div className="col-span-3">
              <Textarea
                id="note"
                {...register("note")}
                className="w-full"
                placeholder="Ghi chú thêm của quý khách về bữa tiệc"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Button type="submit" className="mt-5 px-5">
              {" "}
              Đặt bàn{" "}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

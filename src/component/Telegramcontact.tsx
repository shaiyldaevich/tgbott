"use client";
import React from "react";
import scss from "./telegramContact.module.scss";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
interface IformTelegram {
  username: string;
  email: string;
  subject: string;
  description: string;
}
const Telegramcontact = () => {
  const { register, handleSubmit, reset } = useForm<IformTelegram>();
  const Token = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
  const ChatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
  console.log(Token);
  console.log(ChatId);

  const onSubmit: SubmitHandler<IformTelegram> = async (data) => {
    reset();                                                       
    await axios.post(`https://api.telegram.org/bot${Token}/sendMessage`, {
      chat_id: ChatId,
      parse_mode: "html",
      text: messageModel(data),
    });
  };
  const messageModel = (data: IformTelegram) => {
    let messageTg = `Username:<b>${data.username}</b>\n `;
    messageTg += `Email Address:<b>${data.email}</b>\n `;
    messageTg += `Subject:<b>${data.subject}</b>\n `;
    messageTg += `Description:<b>${data.description}</b>\n  `;
    return messageTg;
  };

  return (
    <section className={scss.telegramContact}>
      <div className="container">
        <div className={scss.content}>
          <h1>telegramContact</h1>
          <form className={scss.form} onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="username"
              {...(register("username", { required: true }))}
            />
            <input
              type="text"
              placeholder="email"
              {...(register("email", { required: true }))}
            />
            <input
              type="text"
              placeholder="subject"
              {...(register("subject", { required: true }))}
            />
            <input
              type="text"
              placeholder="description"
              {...(register("description", { required: true }))}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Telegramcontact;

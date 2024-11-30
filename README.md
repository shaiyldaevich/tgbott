

Russian Language 🇷🇺:
Telegram SMS бот
Инструкции
Откройте Telegram и найдите @botFather.
Отправьте следующие команды для создания нового бота:
/newbot: Создать нового бота.
Укажите имя бота, например: Elcho911 (можно использовать ваше собственное имя).
Дайте уникальное имя боту в формате: elcho911_bot (убедитесь, что оно заканчивается на "_bot" с использованием подчеркивания).
Вы получите API токен для вашего бота: **********************.
Сохраните этот токен в файле с именем .env в разделе TELEGRAM_TOKEN=.
Создайте Telegram канал для ваших сообщений.
Пригласите вашего бота (@elcho911_bot) в ваш Telegram канал и предоставьте ему права администратора.
Найдите ID вашего Telegram канала:
Используйте @getmyid_bot, отправив любое сообщение из вашего канала и переслав его @getmyid_bot.
Запишите CHAT_ID из ответа (например, -235********42).
Сохраните CHAT_ID в файле .env в разделе TELEGRAM_CHAT_ID=.
Использование кода
Функция onSubmit
const onSubmit: SubmitHandler<IFormTelegram> = async (data) => {
	await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
		chat_id: CHAT_ID,
		parse_mode: "html",
		text: messageModel(data)
	});
};
Описание
Функция onSubmit используется для отправки сообщений в Telegram через вашего бота. Она принимает данные формы, обрабатывает их и отправляет сообщение с использованием API Telegram.

Параметры
data (IFormTelegram): Объект, содержащий данные, которые были введены в форму.
Процесс
Асинхронно отправляет POST запрос к API Telegram.
В запросе используется URL, содержащий ваш TOKEN, полученный от @botFather.
Тело запроса включает:
chat_id: Идентификатор вашего Telegram канала, сохраненный в CHAT_ID.
parse_mode: Устанавливается в "html", что позволяет использовать HTML разметку в сообщениях.
text: Сообщение, сгенерированное функцией messageModel, которая преобразует данные формы в текст.
Пример использования
// Пример использования функции onSubmit в React компоненте
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';

interface IFormTelegram {
  // поля формы
  message: string;
}

const TelegramForm: React.FC = () => {
  const { register, handleSubmit } = useForm<IFormTelegram>();

  const onSubmit: SubmitHandler<IFormTelegram> = async (data) => {
    await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`, {
      chat_id: process.env.TELEGRAM_CHAT_ID,
      parse_mode: "html",
      text: data.message,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('message')} placeholder="Введите сообщение" />
      <button type="submit">Отправить</button>
    </form>
  );
};

export default TelegramForm;
Заметки
Убедитесь, что ваши TOKEN и CHAT_ID правильно указаны в файле .env.
Функция messageModel должна быть определена, чтобы корректно обрабатывать данные формы и возвращать текст сообщения.
English Language 🇺🇸:
Telegram SMS bot
Instructions
This is a Node.js module available through the npm registry.

Before installing, download and install Node.js. Node.js 0.10 or higher is required.

Installation is done using the npm install command:

$ npm install
Follow our installing guide for more information.

Stating bot
Open Telegram and search for @botFather.
Send the following commands to create a new bot:
/newbot: Create a new bot.
Provide a name for the bot, for example: Elcho911 (you can use your own name).
Give a unique username to the bot, following the format: elcho911_bot (ensure it ends with "_bot" using an underscore).
You will receive an API token for your bot: **********************.
Save this token in a file named .env under the section TELEGRAM_TOKEN=.
Create a Telegram channel for your messages.
Invite your bot (@elcho911_bot) to your Telegram channel and grant it administrative rights.
Find the ID of your Telegram channel:
Use the @getmyid_bot by sending any message from your channel and forwarding it to @getmyid_bot.
Note the CHAT_ID in the response (e.g., -235********42).
Save the CHAT_ID in the .env file under the section TELEGRAM_CHAT_ID=.
Run your project using npm run dev, and you should see a message in the console:
server running at: http://localhost:5000
Perform a test GET request to http://localhost:5000. If you receive the following JSON response:
{
	"message": "Hello World!"
}
proceed to the next step for sending messages to Telegram.
Make a POST request to the following URL: http://localhost:5000/api/v1/send-telegram with the following JSON payload:
{
	"name": "Elcho911",
	"email": "boss.armsport@gmail.com",
	"subject": "WeDevX",
	"message": "Hello, Elcho911 👋🏻"
}
You should receive the following JSON response:
{
	"success": true,
	"data": {
		"name": "Elcho911",
		"email": "boss.armsport@gmail.com",
		"subject": "WeDevX",
		"message": "Hello, Elcho911 👋🏻"
	}
}
Verify that the message has been sent to Telegram with the content:
Name: Elcho911
Email: boss.armsport@gmail.com
Subject: WeDevX
Message: Hello, Elcho911 👋🏻
All set!

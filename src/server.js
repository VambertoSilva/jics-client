import dotenv from 'dotenv';
dotenv.config();

import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';

import oauthRoutes from '#routes/oauth.js';
import usersRoutes from '#routes/users.js';

import { formattedSendStatus } from '#utils/sendStatusJSONFormatter.js';

const app = express();
app.response.sendStatus = formattedSendStatus;

app.use(cors({ crendentials: true, origin: process.env.WEBAPP_HOST }));
app.use(express.json());
app.use(cookieParser());

app.use(oauthRoutes);
app.use(usersRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

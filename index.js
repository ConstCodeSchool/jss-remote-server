import express from "express";
import cors from "cors";
import { config } from "dotenv";

import userRouter from "./database/user.js";
import articleRouter from "./database/article.js";
import fileRouter from "./database/file.js";

config();

express()
	.use(cors(), userRouter, articleRouter, fileRouter)
	.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));

import { Request, Response } from 'express';

export async function add_question_route_post(res: Response, req: Request) {
	let questionContent: string = req.body.content;
}
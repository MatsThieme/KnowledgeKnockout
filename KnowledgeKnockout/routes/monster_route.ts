import { Request, Response } from 'express';
import { MySQL } from '../mysql/MySql';
import { render } from '../views/render';

export async function monster_route_get(req: Request, res: Response) {
    const imgSources: string[] = (await MySQL.query('SELECT avatarImg FROM topic ORDER BY id')).map((q: any) => q.avatarImg);
    res.send(await render(['monster'], {
        bild1: imgSources[0],
        bild2: imgSources[1],
        bild3: imgSources[2],
        bild4: imgSources[3],
        bild5: imgSources[4],
        bild6: imgSources[5],
        bild7: imgSources[6],
        bild8: imgSources[7],
        bild9: imgSources[8]
    }));
}
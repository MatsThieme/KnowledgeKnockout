import { Request, Response } from 'express';
import { MySQL } from '../mysql/MySql';
import { render } from '../views/render';

export async function monster_route_get(req: Request, res: Response) {
    const imgSources: string[] = (await MySQL.query('SELECT avatarImg FROM topic ORDER BY id')).map((q: any) => q.avatarImg);
    res.send(await render(['monster'], {
        title: 'monsters',
        bild1: imgSources[0],
        bild2: imgSources[1],
        bild3: imgSources[2],
        bild4: imgSources[3],
        bild5: imgSources[4],
        bild6: imgSources[5],
        bild7: imgSources[6],
        bild8: imgSources[7],
        bild9: imgSources[8],
        level1: req.session?.user.avatars[0].level,
        level2: req.session?.user.avatars[1].level,
        level3: req.session?.user.avatars[2].level,
        level4: req.session?.user.avatars[3].level,
        level5: req.session?.user.avatars[4].level,
        level6: req.session?.user.avatars[5].level,
        level7: req.session?.user.avatars[6].level,
        level8: req.session?.user.avatars[7].level,
        level9: req.session?.user.avatars[8].level
    }));
}
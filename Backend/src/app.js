import express from "express";

export const config = async () => {

    
        const app = express();
        let server;

        // app.use(bodyparser.urlencoded({extended: true}));
        // app.use(bodyparser.json({ limit: '1Mb' }));

        const port = 600;

        app.get('/', (req, res) => {
                res.status(200).send({
                    api: "v1.0"
                });
            });

        app.get('/clicks', (req, res) => {
            res.status(200).send({
                api: "v1.0"
            });
        });

        server = await app.listen(port, () => {
                    const message =
                    `Ambiente de Homologação | localhost:${port}\n`+
                    `Aguardando conexão com o usuário "backendclick" ...`;
                    console.log(message);
                });

}


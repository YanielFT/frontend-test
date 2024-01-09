import { sleep } from "./sleep";

const users = [
    {
        id: '1',
        photo: 'https://media.vogue.mx/photos/5d6eb55456587800082ae4ba/1:1/w_2002,h_2002,c_limit/Cara-Delevingne-tendencias-belleza-2.jpg',
        fullName: 'Cara Delevigne',
        username: 'admin',
        password: '1234',
    },
    {
        id: '2',
        photo: 'https://www.lavoz.com.ar/resizer/MXLwfVAVhd96ru3NiqvxIbKmnO0=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/F4FJLF44PFBWZKUCUNP4BGUEMQ.jpg',
        fullName: 'Milo J',
        username: 'admin2',
        password: '1234',
    },
    {
        id: '3',
        photo: 'data:image/jpeg;base64,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',
        fullName: 'Tirone González',
        username: 'admin3',
        password: '1234',
    }
]


const chats = [
    {
        chat: '1',
        messages: [
            {
                id: 'Cara Delevigne-11:55',
                idUser: '1',
                hour: '11:55',
                message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, autem fugit? Atque ea labore magni tempore blanditiis quam dolorem. Nobis sequi cupiditate rerum accusantium? Doloribus impedit iste facere voluptatibus. Reprehenderit!'
            },
            {
                id: 'Milo J-05:00',
                idUser: '2',
                hour: '05:00',
                message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, autem fugit? Atque ea labore magni tempore blanditiis quam dolorem. Nobis sequi cupiditate rerum accusantium? Doloribus impedit iste facere voluptatibus. Reprehenderit!'
            },
        ]
    },
    {
        chat: '2',
        messages: [
            {
                id: 'Cara Delevigne-11:55',
                idUser: '1',
                hour: '11:55',
                message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, autem fugit? Atque ea labore magni tempore blanditiis quam dolorem. Nobis sequi cupiditate rerum accusantium? Doloribus impedit iste facere voluptatibus. Reprehenderit!'
            },
            {
                id: 'Milo J-05:00',
                idUser: '3',
                hour: '05:00',
                message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, autem fugit? Atque ea labore magni tempore blanditiis quam dolorem. Nobis sequi cupiditate rerum accusantium? Doloribus impedit iste facere voluptatibus. Reprehenderit!'
            },
            {
                id: 'Milo J-05:01',
                idUser: '3',
                hour: '05:00',
                message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, autem fugit? Atque ea labore magni tempore blanditiis quam dolorem. Nobis sequi cupiditate rerum accusantium? Doloribus impedit iste facere voluptatibus. Reprehenderit!'
            },
        ]
    },
    // {
    //     id: 'Milo J-05:00',
    //     hour: '05:00',
    //     message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, autem fugit? Atque ea labore magni tempore blanditiis quam dolorem. Nobis sequi cupiditate rerum accusantium? Doloribus impedit iste facere voluptatibus. Reprehenderit!'
    // },
    // {
    //     id: 'Tirone González-20:30',
    //     hour: '20:30',
    //     message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, autem fugit? Atque ea labore magni tempore blanditiis quam dolorem. Nobis sequi cupiditate rerum accusantium? Doloribus impedit iste facere voluptatibus. Reprehenderit!'
    // },
    // {
    //     id: 'Cristiano Ronaldo-20:30',
    //     hour: '19:30',
    //     message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, autem fugit? Atque ea labore magni tempore blanditiis quam dolorem. Nobis sequi cupiditate rerum accusantium? Doloribus impedit iste facere voluptatibus. Reprehenderit!'
    // },
    // {
    //     id: 'Fernando Herrera-20:30',
    //     hour: '19:30',
    //     message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, autem fugit? Atque ea labore magni tempore blanditiis quam dolorem. Nobis sequi cupiditate rerum accusantium? Doloribus impedit iste facere voluptatibus. Reprehenderit!'
    // },
];


export async function getMessage(chat) {
    await sleep(400);
    return chats.find(m => m.chat == chat)
        .messages?.map(m => {
            const {fullName, photo} = getUserByIdDemo(m.idUser);
            return { ...m, fullName,photo }
        }
        )
}

export async function getUserByNameAndPass({ username, password }) {
    return users.find(user => user.username == username && user.password == password);
}

export async function getUserById(id) {
    return users.find(user => user.id == id);

}

function getUserByIdDemo(id) {
    return users.find(user => user.id == id);

}

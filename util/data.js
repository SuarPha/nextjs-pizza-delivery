import bcrypt from 'bcrypt';


const data = {
    users: [
        {
            name: 'Suarpha',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234'),
            isAdmin: true,
        },
        {
            name: 'Supis',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234'),
            isAdmin: false,
        },
    ],
    pizzas: [
        {
            "title": "pizza1",
            "img": "/img/pizza-offer.png",
            "desc": "desceptiontest",
            "prices": [99,129,149],
            "extraOprion": [
                {
                    "text": "Garlic sauce",
                    "prpice": 2
                }
            ]
        },
        {
            "title": "pizza2",
            "img": "/img/pizza-offer2.png",
            "desc": "desceptiontest",
            "prices": [99,129,149],
            "extraOprion": [
                {
                    "text": "Garlic sauce",
                    "prpice": 2
                }
            ]
        }
    ]
}
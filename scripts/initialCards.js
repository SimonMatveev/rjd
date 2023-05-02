const initialCards = [
    {
        title: 'Организация работы хозяйства пути и сооружений',
        text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque tenetur officiis saepe at excepturi nobis culpa vel optio illum, voluptatem ducimus assumenda veniam consequatur, ab id quos omnis soluta rem! Officia tenetur animi dolore laudantium dicta quisquam mollitia, aut architecto vel! Eius, adipisci. Recusandae sunt, labore quisquam excepturi voluptatibus unde ullam molestias quo perspiciatis inventore necessitatibus sapiente at placeat perferendis.
        Numquam, cumque sequi dolor consequuntur neque totam culpa vel placeat corrupti reprehenderit dolorum cupiditate distinctio libero nesciunt. Earum non assumenda quae cupiditate aperiam consectetur similique excepturi vitae? Sapiente, pariatur architecto.
        Laborum, ut? Adipisci cum aut odit quasi dicta! Voluptates, harum similique. Labore, vitae facilis, error ullam incidunt quisquam dolorum aut fuga, quis nemo delectus libero itaque. Quae exercitationem dicta mollitia.
        Illum architecto eaque, dolores fugit impedit eius voluptatum iure ut iusto velit facilis consequuntur modi sed, temporibus molestias alias ipsam eum vero molestiae. Repudiandae, dicta aliquid consequatur exercitationem iusto fuga.
        Molestias excepturi ipsam voluptate itaque esse tempore doloremque rem architecto dolorum at sapiente autem quasi quod voluptatum officiis magni maxime, quibusdam velit consectetur similique iste sunt eveniet ab! Hic, iure.`
    },
    {
        title: 'Контроль параметров геометрии рельсовой колеи',
        text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque tenetur officiis saepe at excepturi nobis culpa vel optio illum, voluptatem ducimus assumenda veniam consequatur, ab id quos omnis soluta rem! Officia tenetur animi dolore laudantium dicta quisquam mollitia, aut architecto vel! Eius, adipisci. Recusandae sunt, labore quisquam excepturi voluptatibus unde ullam molestias quo perspiciatis inventore necessitatibus sapiente at placeat perferendis.
        Numquam, cumque sequi dolor consequuntur neque totam culpa vel placeat corrupti reprehenderit dolorum cupiditate distinctio libero nesciunt. Earum non assumenda quae cupiditate aperiam consectetur similique excepturi vitae? Sapiente, pariatur architecto.
        Laborum, ut? Adipisci cum aut odit quasi dicta! Voluptates, harum similique. Labore, vitae facilis, error ullam incidunt quisquam dolorum aut fuga, quis nemo delectus libero itaque. Quae exercitationem dicta mollitia.
        Illum architecto eaque, dolores fugit impedit eius voluptatum iure ut iusto velit facilis consequuntur modi sed, temporibus molestias alias ipsam eum vero molestiae. Repudiandae, dicta aliquid consequatur exercitationem iusto fuga.
        Molestias excepturi ipsam voluptate itaque esse tempore doloremque rem architecto dolorum at sapiente autem quasi quod voluptatum officiis magni maxime, quibusdam velit consectetur similique iste sunt eveniet ab! Hic, iure.`
    },
    {
        title: 'Неразрушающий контроль рельсов',
        text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque tenetur officiis saepe at excepturi nobis culpa vel optio illum, voluptatem ducimus assumenda veniam consequatur, ab id quos omnis soluta rem! Officia tenetur animi dolore laudantium dicta quisquam mollitia, aut architecto vel! Eius, adipisci. Recusandae sunt, labore quisquam excepturi voluptatibus unde ullam molestias quo perspiciatis inventore necessitatibus sapiente at placeat perferendis.
        Numquam, cumque sequi dolor consequuntur neque totam culpa vel placeat corrupti reprehenderit dolorum cupiditate distinctio libero nesciunt. Earum non assumenda quae cupiditate aperiam consectetur similique excepturi vitae? Sapiente, pariatur architecto.
        Laborum, ut? Adipisci cum aut odit quasi dicta! Voluptates, harum similique. Labore, vitae facilis, error ullam incidunt quisquam dolorum aut fuga, quis nemo delectus libero itaque. Quae exercitationem dicta mollitia.
        Illum architecto eaque, dolores fugit impedit eius voluptatum iure ut iusto velit facilis consequuntur modi sed, temporibus molestias alias ipsam eum vero molestiae. Repudiandae, dicta aliquid consequatur exercitationem iusto fuga.
        Molestias excepturi ipsam voluptate itaque esse tempore doloremque rem architecto dolorum at sapiente autem quasi quod voluptatum officiis magni maxime, quibusdam velit consectetur similique iste sunt eveniet ab! Hic, iure.`
    },
    {
        title: 'Текущее содержание верхнего строения пути',
        text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque tenetur officiis saepe at excepturi nobis culpa vel optio illum, voluptatem ducimus assumenda veniam consequatur, ab id quos omnis soluta rem! Officia tenetur animi dolore laudantium dicta quisquam mollitia, aut architecto vel! Eius, adipisci. Recusandae sunt, labore quisquam excepturi voluptatibus unde ullam molestias quo perspiciatis inventore necessitatibus sapiente at placeat perferendis.
        Numquam, cumque sequi dolor consequuntur neque totam culpa vel placeat corrupti reprehenderit dolorum cupiditate distinctio libero nesciunt. Earum non assumenda quae cupiditate aperiam consectetur similique excepturi vitae? Sapiente, pariatur architecto.
        Laborum, ut? Adipisci cum aut odit quasi dicta! Voluptates, harum similique. Labore, vitae facilis, error ullam incidunt quisquam dolorum aut fuga, quis nemo delectus libero itaque. Quae exercitationem dicta mollitia.
        Illum architecto eaque, dolores fugit impedit eius voluptatum iure ut iusto velit facilis consequuntur modi sed, temporibus molestias alias ipsam eum vero molestiae. Repudiandae, dicta aliquid consequatur exercitationem iusto fuga.
        Molestias excepturi ipsam voluptate itaque esse tempore doloremque rem architecto dolorum at sapiente autem quasi quod voluptatum officiis magni maxime, quibusdam velit consectetur similique iste sunt eveniet ab! Hic, iure.`
    },
    {
        title: 'Технологии выполнения основных работ при текущем содержании пути',
        text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque tenetur officiis saepe at excepturi nobis culpa vel optio illum, voluptatem ducimus assumenda veniam consequatur, ab id quos omnis soluta rem! Officia tenetur animi dolore laudantium dicta quisquam mollitia, aut architecto vel! Eius, adipisci. Recusandae sunt, labore quisquam excepturi voluptatibus unde ullam molestias quo perspiciatis inventore necessitatibus sapiente at placeat perferendis.
        Numquam, cumque sequi dolor consequuntur neque totam culpa vel placeat corrupti reprehenderit dolorum cupiditate distinctio libero nesciunt. Earum non assumenda quae cupiditate aperiam consectetur similique excepturi vitae? Sapiente, pariatur architecto.
        Laborum, ut? Adipisci cum aut odit quasi dicta! Voluptates, harum similique. Labore, vitae facilis, error ullam incidunt quisquam dolorum aut fuga, quis nemo delectus libero itaque. Quae exercitationem dicta mollitia.
        Illum architecto eaque, dolores fugit impedit eius voluptatum iure ut iusto velit facilis consequuntur modi sed, temporibus molestias alias ipsam eum vero molestiae. Repudiandae, dicta aliquid consequatur exercitationem iusto fuga.
        Molestias excepturi ipsam voluptate itaque esse tempore doloremque rem architecto dolorum at sapiente autem quasi quod voluptatum officiis magni maxime, quibusdam velit consectetur similique iste sunt eveniet ab! Hic, iure.`
    },
    {
        title: 'Бесстыковой путь',
        text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque tenetur officiis saepe at excepturi nobis culpa vel optio illum, voluptatem ducimus assumenda veniam consequatur, ab id quos omnis soluta rem! Officia tenetur animi dolore laudantium dicta quisquam mollitia, aut architecto vel! Eius, adipisci. Recusandae sunt, labore quisquam excepturi voluptatibus unde ullam molestias quo perspiciatis inventore necessitatibus sapiente at placeat perferendis.
        Numquam, cumque sequi dolor consequuntur neque totam culpa vel placeat corrupti reprehenderit dolorum cupiditate distinctio libero nesciunt. Earum non assumenda quae cupiditate aperiam consectetur similique excepturi vitae? Sapiente, pariatur architecto.
        Laborum, ut? Adipisci cum aut odit quasi dicta! Voluptates, harum similique. Labore, vitae facilis, error ullam incidunt quisquam dolorum aut fuga, quis nemo delectus libero itaque. Quae exercitationem dicta mollitia.
        Illum architecto eaque, dolores fugit impedit eius voluptatum iure ut iusto velit facilis consequuntur modi sed, temporibus molestias alias ipsam eum vero molestiae. Repudiandae, dicta aliquid consequatur exercitationem iusto fuga.
        Molestias excepturi ipsam voluptate itaque esse tempore doloremque rem architecto dolorum at sapiente autem quasi quod voluptatum officiis magni maxime, quibusdam velit consectetur similique iste sunt eveniet ab! Hic, iure.`
    },
    {
        title: 'Пися попа',
        text: `хох хех хох хех хох хех хох хех`
    }
]
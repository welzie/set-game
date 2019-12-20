window.addEventListener("load", () => {

    const cards = [];
    const properties = {
        color: ['purple', 'green', 'red'],
        shape: ['oval', 'squiqgle', 'diamond'],
        fill: ['empty', 'shaded', 'solid'],
        count: [1, 2, 3]
    };

    let number = 0;
    properties.color.forEach( color => {
        properties.shape.forEach( shape => {
            properties.fill.forEach( fill => {
                properties.count.forEach( count => {
                    cards.push({ id: ++number, color, shape, fill,  count});
                })
            });
        });
    });

    console.log(cards);
});
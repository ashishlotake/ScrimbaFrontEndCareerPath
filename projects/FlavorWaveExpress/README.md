# FlavorWaveExpress
<video autoplay="true" loop="true" muted="true" playsinline="true" data-play="yep">
    <source  src="./preview.mp4" type="video/mp4">
</video> 

A food ordering platfrom, just add food items in `data.js` and see the magic happen.
Example for adding item at the end of the list, then make sure to add image in the `image` floder and name it same as the image name here.

Make sure to add increase the `id` by `1` for next item, and be sure evsery item have `unique id`.
```
export const menuArray = [
    {...},
    {...},
    {...},
    {...},
    {
        name: "Sandwich",
        ingredients: ["meats", "cheeses", "lettuce", "tomato"],
        price: 8,
        image: "sandwich.jpg",
        id: 5
    },
]
```
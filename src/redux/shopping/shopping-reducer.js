import * as actionTypes from "./shopping-types"

const INITIAL_STATE = {
    products: [{
        id: 1,
        img1: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-10.1-22-grey-1_pvpqibajmtuugcbg.jpg",
        img2: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-10.1-22-grey-2_otnsvvp8titpejzd.jpg",
        title: "3 Pc Embroidered Lawn Suit With Chiffon Dupatta",
        price: 37
    },
    {
        id: 2,
        img1: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-48-22-purple-1_adojxkcvrdju0juj.jpg",
        img2: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-48-22-purple-2_x60hpit822aadk9h.jpg",
        title: "2 Pc Embroidered Dobby Suit With Cambric Trouser",
        price: 37
    },
    {
        id: 3,
        img2: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-12-22-mint-green-3_erv4lhvdb748esw7.jpg",
        img1: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-12-22-mint-green-4_klbfzb6yeji3dxtw.jpg",
        title: "3 Pc Embroidered Lawn Suit With Silk Dupatta",
        price: 40
    },
    {
        id: 4,
        img1: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-10.1-22-peach-1_wr8lrxzjlzegey5a.jpg",
        img2: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-10.1-22-peach-2_u4mupk3wqebphmxu.jpg",
        title: "3 Pc Embroidered Lawn Suit With Chiffon Dupatta",
        price: 37
    },
    {
        id: 5,
        img1: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-09-22-beige-1_mesilofgkfktcazt.jpg",
        img2: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-09-22-beige-2_dhiwan0rcadmf2fi.jpg",
        title: "3 Pc Embroidered Lawn Suit With Jacquard Poly Net Dupatta",
        price: 37
    },
    {
        id: 6,
        img1: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-49-22-lime-green-1_mm7htdfpjptaagzg.jpg",
        img2: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-49-22-lime-green-2_yvvslyjcqyk5bdw5.jpg",
        title: "2 Pc Embroidered Dobby Suit With Cambric Trouser",
        price:24
    },
    {
        id: 7,
        img2: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-23.1-22-cream-2_dh27nirgvzin6jg9.jpg",
        img1: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-23.1-22-cream-1_kttswpzdudrmrefk.jpg",
        title: "2 Pc Printed Lawn Suit With Cambric Trouser",
        price: 20
    },
    {
        id: 8,
        img2: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/272443310cb21d8ec31039970ef56deb/s/s/ss-44.1-22-red-2_uzen79kkqqop7ibs.jpg",
        img1: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-44.1-22-red-1_33uu8bmgoltk49gm.jpg",
        title: "2 Pc Embroidered Yarn Dyed Suit With Cambric Trouser",
        price: 26
    }],
    cartItems: [],
    
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const item = state.products.find(product => product.id === action.payload.id)
            const inCart = state.cartItems.find(product => product.id === action.payload.id ? true : false);
            return {
                ...state,
                cartItems: inCart ? state.cartItems.map(items => item.id === action.payload.id ?
                    { ...items, qty: items.qty + 1 } : items) : [...state.cartItems, { ...item, qty: 1 }]

            };
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((items) =>  items.id !== action.payload.id )
            }
        case actionTypes.ADJUST_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map((items) => items.id === action.payload.id ?
                    { ...items, qty: +action.payload.qty } : items)


            }
 
        default:
            return state
    }

}

export default shopReducer
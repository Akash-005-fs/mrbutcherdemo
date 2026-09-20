// import React, { useState } from "react";
// import "../styles/products.css";
// import { useCart } from "../Cartcontext";
// import Logo from "../pictures/mainlogo.png";

// import Img1 from "../pictures/tenderloien.jpg";
// import Img2 from "../pictures/Entrecote-de-boeuf.jpg";
// import Img3 from "../pictures/ribeye.png";
// import Img4 from "../pictures/pillets.jpg";
// import Img5 from "../pictures/pichama.jpg";
// import Img6 from "../pictures/thick sirolin.jpg";
// import Img7 from "../pictures/flank.png";
// import Img8 from "../pictures/beefstrips.png";
// import Img9 from "../pictures/saude.jpg";
// import Img10 from "../pictures/sirolien strips.png";
// import Img11 from "../pictures/beeftail.png";
// import Img12 from "../pictures/roastbeef.jpg";
// import Img13 from "../pictures/ribstewmeat.jpg";
// import Img14 from "../pictures/beefribslappen.jpg";
// import Img15 from "../pictures/Patty__1_.jpg";
// const availableMeat = [
//   {
//     name: "Buffalo Haasbiefstuk",
//     englishName: "Tenderloin Steak",
//     image: Img1,
//     description:
//       "Exceptionally tender premium cut with delicate flavour and buttery texture.",
//     pricePerKg: 79,
//     weightOptions: [
//       { kg: 0.258, price: 20.38 },
//       { kg: 0.264, price: 20.86 },
//       { kg: 0.226, price: 17.85 },
//       { kg: 0.286, price: 22.59 },
//       { kg: 0.282, price: 22.28 },
//       { kg: 0.242, price: 19.12 },
//       { kg: 0.222, price: 17.54 },
//       { kg: 0.244, price: 19.28 },
//       { kg: 0.152, price: 12.01 },
//       { kg: 0.174, price: 13.75 },
//       { kg: 0.104, price: 8.22 },
//       { kg: 0.184, price: 14.54 },
//     ],
//   },
//   {
//     name: "Buffalo Entrecote",
//     englishName: "Ribeye Steak",
//     image: Img2,
//     description:
//       "Richly marbled premium cut delivering juicy flavour in every bite.",
//     pricePerKg: 55.84,
//     weightOptions: [
//       { kg: 1.018, price: 56.85 },
//       { kg: 1.082, price: 60.41 },
//       { kg: 0.9, price: 50.26 },
//     ],
//   },
//   {
//     name: "Buffalo Kogelbiefstuk",
//     englishName: "Eye of Rump Steak",
//     image: Img3,
//     description:
//       "Lean and tender steak perfect for grilling or pan-searing.",
//     pricePerKg: 49,
//     weightOptions: [{ kg: 0.802, price: 39.3 }],
//   },
//   {
//     name: "Buffalo Rosbief",
//     englishName: "Roast Beef",
//     image: Img4,
//     description:
//       "Traditional roasting cut offering excellent flavour and tender slices.",
//     pricePerKg: 43,
//     weightOptions: [
//       { kg: 0.49, price: 21.07 },
//       { kg: 0.478, price: 20.55 },
//       { kg: 0.462, price: 19.87 },
//       { kg: 0.382, price: 16.43 },
//       { kg: 0.412, price: 17.72 },
//       { kg: 0.342, price: 14.71 },
//       { kg: 0.418, price: 17.97 },
//     ],
//   },
//   {
//     name: "Buffalo Liesstuk",
//     englishName: "Tri-Tip",
//     image: Img5,
//     description:
//       "Juicy triangular cut ideal for grilling, roasting and family meals.",
//     pricePerKg: 43,
//     weightOptions: [{ kg: 1.352, price: 58.14 }],
//   },
//   {
//     name: "Buffalo Dikke Lende",
//     englishName: "Top Sirloin Steak",
//     image: Img6,
//     description:
//       "Flavourful premium steak cut with firm texture and richness.",
//     pricePerKg: 38,
//     weightOptions: [
//       { kg: 0.456, price: 17.33 },
//       { kg: 0.508, price: 19.3 },
//       { kg: 0.48, price: 18.24 },
//       { kg: 0.496, price: 18.85 },
//       { kg: 0.486, price: 18.47 },
//     ],
//   },
//   {
//     name: "Buffalo Bieflappen",
//     englishName: "Beef Steaks",
//     image: Img7,
//     description:
//       "Versatile steak portions perfect for frying, grilling or curries.",
//     pricePerKg: 36,
//     weightOptions: [
//       { kg: 0.572, price: 20.59 },
//       { kg: 0.306, price: 11.02 },
//       { kg: 0.31, price: 11.16 },
//       { kg: 0.33, price: 11.88 },
//       { kg: 0.32, price: 11.52 },
//       { kg: 0.374, price: 13.46 },
//       { kg: 0.44, price: 15.84 },
//       { kg: 0.41, price: 14.76 },
//       { kg: 0.492, price: 17.71 },
//       { kg: 0.476, price: 17.14 },
//       { kg: 0.596, price: 21.46 },
//       { kg: 0.568, price: 20.45 },
//       { kg: 0.584, price: 21.02 },
//     ],
//   },
//   {
//     name: "Buffalo Lendelappen",
//     englishName: "Sirloin Strips",
//     image: Img8,
//     description:
//       "Tender sliced steak ideal for stir-fries, wraps and quick meals.",
//     pricePerKg: 34,
//     weightOptions: [
//       { kg: 0.804, price: 27.34 },
//       { kg: 0.928, price: 31.55 },
//       { kg: 0.722, price: 24.55 },
//       { kg: 0.824, price: 28.02 },
//       { kg: 0.792, price: 26.93 },
//     ],
//   },
//   {
//     name: "Buffalo Picanha",
//     englishName: "Rump Cap",
//     image: Img9,
//     description:
//       "Brazilian barbecue favourite with rich flavour and juicy texture.",
//     pricePerKg: 34,
//     weightOptions: [{ kg: 1.22, price: 41.48 }],
//   },
// ];

// const otherProducts = [
//   {
//     name: "Buffalo Sukade",
//     englishName: "Chuck Blade Steak",
//     image: Img10,
//     description:
//       "Deeply flavoured cut best suited for slow cooking dishes.",
//     pricePerKg: 28,
//     weightOptions: [{ kg: 1.952, price: 54.66 }],
//   },
//   {
//     name: "Buffalo Ossenstaart",
//     englishName: "Oxtail",
//     image: Img11,
//     description:
//       "Gelatin-rich cut creating rich broths, soups and hearty stews.",
//     pricePerKg: 27,
//     weightOptions: [{ kg: 1.19, price: 32.13 }],
//   },
//   {
//     name: "Buffalo Braadlappen",
//     englishName: "Braising Steak",
//     image: Img12,
//     description:
//       "Slow-cooking favourite becoming tender, juicy and full of flavour.",
//     pricePerKg: 26,
//     weightOptions: [
//       { kg: 0.528, price: 13.73 },
//       { kg: 0.61, price: 15.86 },
//       { kg: 0.612, price: 15.91 },
//       { kg: 0.62, price: 16.12 },
//       { kg: 0.612, price: 15.91 },
//       { kg: 0.666, price: 17.32 },
//       { kg: 1.0, price: 26.0 },
//     ],
//   },
//   {
//     name: "Buffalo Stoofvlees",
//     englishName: "Stewing Beef",
//     image: Img13,
//     description:
//       "Carefully diced beef perfect for curries, stews and casseroles.",
//     pricePerKg: 20,
//     weightOptions: [
//       { kg: 0.61, price: 12.2 },
//       { kg: 0.608, price: 12.16 },
//       { kg: 0.878, price: 17.56 },
//       { kg: 0.394, price: 7.88 },
//       { kg: 0.478, price: 9.56 },
//       { kg: 0.468, price: 9.36 },
//       { kg: 0.488, price: 9.76 },
//       { kg: 0.538, price: 10.76 },
//       { kg: 0.53, price: 10.6 },
//       { kg: 0.522, price: 10.44 },
//     ],
//   },
//   {
//     name: "Buffalo Riblappen",
//     englishName: "Short Ribs",
//     image: Img14,
//     description:
//       "Rich meaty ribs ideal for smoking, braising and barbecuing.",
//     pricePerKg: 20,
//     weightOptions: [
//       { kg: 1.874, price: 37.48 },
//       { kg: 1.836, price: 36.72 },
//       { kg: 2.038, price: 40.76 },
//       { kg: 1.672, price: 33.44 },
//       { kg: 1.738, price: 34.76 },
//       { kg: 1.584, price: 31.68 },
//     ],
//   },
//   {
//     name: "Buffalo Burgers",
//     englishName: "Premium Buffalo Patties",
//     image: Img15,
//     description:
//       "Handcrafted burgers packed with premium flavour and juicy texture.",
//     pricePerKg: null,
//     weightOptions: [{ kg: null, label: "In Stock", price: 14.5 }],
//   },
// ];

// const ProductCard = ({ item }) => {
//   const { addToCart, cartItems } = useCart();
//   const [added, setAdded] = useState(false);
//   const [selectedIdx, setSelectedIdx] = useState(0);

//   const selected = item.weightOptions[selectedIdx];

//   const inCart = cartItems.find(
//     (i) =>
//       i.name === item.name &&
//       i.weight === (selected.label ?? `${selected.kg} kg`)
//   );

//   const handleAdd = () => {
//     addToCart({
//       name: item.name,
//       englishName: item.englishName,
//       weight: selected.label ?? `${selected.kg} kg`,
//       price: selected.price,
//       image: item.image,
//     });

//     setAdded(true);
//     setTimeout(() => setAdded(false), 1500);
//   };

//   return (
//     <div className="recipe-card">
//       <div className="recipe-image-wrapper">
//         <img src={Logo} alt="Company Logo" className="product-logo" />
//         <img src={item.image} alt={item.name} className="recipe-image" />

//         {inCart && (
//           <div className="card-in-cart-badge">{inCart.qty} in cart</div>
//         )}
//       </div>

//       <div className="recipe-content">
//         <span className="recipe-category">PREMIUM QUALITY</span>
//         <h3 className="recipe-title">{item.name}</h3>
//         <p className="recipe-english-name">{item.englishName}</p>
//         <p className="recipe-description">{item.description}</p>

//         <div className="recipe-footer">
//           <div className="recipe-meta">
//             <div className="weight-select-wrap">
//               <label className="weight-select-label">Weight</label>

//               <select
//                 className="weight-select"
//                 value={selectedIdx}
//                 onChange={(e) => setSelectedIdx(Number(e.target.value))}
//               >
//                 {item.weightOptions.map((opt, i) => (
//                   <option key={i} value={i}>
//                     {opt.label ?? `${opt.kg} kg`}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <span className="recipe-price">€{selected.price.toFixed(2)}</span>
//           </div>

//           <button
//             className={`add-to-cart-btn ${added ? "added" : ""}`}
//             onClick={handleAdd}
//           >
//             {added ? "✓ Added!" : "+ Add to Cart"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Products = () => {
//   return (
//     <div className="products-page">
//       <div className="products-header">
//         <h1>Available Meat Products</h1>
//         <p>
//           Premium quality buffalo and beef products sourced and processed with
//           care.
//         </p>
//       </div>

//       <h2 className="section-title">Premium Cuts</h2>

//       <div className="product-grid">
//         {availableMeat.map((item, index) => (
//           <ProductCard key={index} item={item} />
//         ))}
//       </div>

//       <h2 className="section-title">Other Available Products</h2>

//       <div className="product-grid">
//         {otherProducts.map((item, index) => (
//           <ProductCard key={index} item={item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;






import React, { useState } from "react";
import "../styles/products.css";
import { useCart } from "../Cartcontext";
import Logo from "../pictures/mainlogo.png";

/*
|--------------------------------------------------------------------------
| DUMMY PRODUCT IMAGE IMPORTS
|--------------------------------------------------------------------------
| Add your actual product images later using these exact filenames.
| Example:
| src/pictures/buffel-haasbiefstuk.jpg
|
| The filenames are intentionally simple so they are easy to manage.
|--------------------------------------------------------------------------
*/

// Premium Cuts
import ImgBuffelHaasbiefstuk from "../pictures/tenderloien.jpg";
import ImgBuffelRibEye from "../pictures/ribeye.png";
import ImgBiefstuk from "../pictures/biestuck.jpg";
import ImgBuffelBiefstukTartaar from "../pictures/biefstucktartar.png";
import ImgBuffelBavette from "../pictures/bavette.png";
import ImgBuffelBiefstuk from "../pictures/buffelbiestuck.png";
import ImgBuffelTBone from "../pictures/tbone.jpg";
import ImgBuffelEntrecote from "../pictures/Entrecote-de-boeuf.jpg";
import ImgEntrecote from "../pictures/tbone.jpg";
import ImgBuffelJodenhaas from "../pictures/buffelo jodenhass.png";
import ImgBuffelLonghaas from "../pictures/longstaiek.jpg";
import ImgBuffelCoteDuBoeuf from "../pictures/bouef.jpg";
import ImgBuffelOssenworst from "../pictures/ossenworst.jpg";
import ImgGourmetVlees from "../pictures/gourmetvlees.png";
import ImgBuffelPicanha from "../pictures/pichama.jpg";
import ImgBuffelRosbief from "../pictures/buffelrobief.png";
import ImgBuffelSate from "../pictures/buffelsatte.png";
import ImgBuffelShortRibs from "../pictures/shrotribs.png";
import ImgBuffelBraadstuk from "../pictures/Buffel Braadstuk.jpg";
import ImgBuffelRollade from "../pictures/buffelrollade.png";

// Other Products
import ImgBuffelSukade from "../pictures/sukade.png";
import ImgBuffelRiblappen from "../pictures/riblappen.png";
import ImgBuffelTong from "../pictures/tongue.png";
import ImgStoofpotjeKantEnKlaar from "../pictures/stoof.jpeg";
import ImgBuffelSaucijzen from "../pictures/Saucijzen.jpg";
import ImgBuffelGourmetPakket from "../pictures/Gourmet pakket.png";
import ImgBuffelBraadlappen from "../pictures/bradlappen.png";
import ImgBuffelMagereLappen from "../pictures/magrelappen.png";
import ImgBuffelHacheeVlees from "../pictures/hachevlees.png";
import ImgBuffelSoepvlees from "../pictures/buffelsoiepvless.png";
import ImgBuffelBarbequeWorsten from "../pictures/barbequeexcose.jpg";
import ImgBuffelSchnitzel from "../pictures/Beef_-_Schnitzel.jpg";
import ImgBuffelWokVlees from "../pictures/buffelvok.png";
import ImgBuffelBaklappen from "../pictures/buffelbaklappen.png";
import ImgBuffelBieflappen from "../pictures/buffelbeiflappen.png";
import ImgBuffelGehakt from "../pictures/bhaket.png";
import ImgBuffelReepjes from "../pictures/rejpees.png";
import ImgBuffelShoarma from "../pictures/shoavarma.jpg";
import ImgBuffelHart from "../pictures/heart.jpg";
import ImgBuffelSoepschenkel from "../pictures/soep.png";
import ImgBuffelMergpijpjes from "../pictures/buffelbone.png";
import ImgBuffelLever from "../pictures/lever.jpg";
import ImgBuffelKniestukken from "../pictures/Kniestukken.png";
import ImgBuffelNiervet from "../pictures/Niervet.png";
import ImgBuffelBurgerGroot4 from "../pictures/Patty__1_.jpg";
import ImgBuffelBurgerKlein4 from "../pictures/patties.png";
import ImgBuffelSoepbotten from "../pictures/brianstocksoup.png";
import ImgBuffelStokjes from "../pictures/stockves.png";
import ImgBuffelSlavinken from "../pictures/slavinken.png";
import ImgBuffelBurgerGroot from "../pictures/patties.png";
import ImgBuffelBurgerKlein from "../pictures/patties.png";


/*
|--------------------------------------------------------------------------
| PRODUCT DATA
|--------------------------------------------------------------------------
| Prices are taken from the Mr. Butcher 2026 brochure.
|
| Most products are sold per kilogram.
| Products explicitly listed as "each" or without /kg in the brochure
| are represented as fixed-price selections.
|--------------------------------------------------------------------------
*/


const availableMeat = [
  {
    name: "Buffel Haasbiefstuk",
    englishName: "Tenderloin",
    image: ImgBuffelHaasbiefstuk,
    description:
      "Premium tender cut with a delicate texture and rich natural flavour.",
    pricePerKg: 66,
    weightOptions: [
      { kg: 1, price: 66 },
    ],
  },

  {
    name: "Buffel Rib-Eye",
    englishName: "Rib-Eye",
    image: ImgBuffelRibEye,
    description:
      "Richly marbled premium cut with deep flavour and a juicy texture.",
    pricePerKg: 46.86,
    weightOptions: [
      { kg: 1, price: 46.86 },
    ],
  },

  {
    name: "Buffel Biefstuk",
    englishName: "Beef Steak",
    image: ImgBiefstuk,
    description:
      "Classic beef steak suitable for grilling, frying or pan-searing.",
    pricePerKg: 44,
    weightOptions: [
      { kg: 1, price: 44 },
    ],
  },

  {
    name: "Buffel Biefstuk tartaar",
    englishName: "Steak Tartare",
    image: ImgBuffelBiefstukTartaar,
    description:
      "Finely prepared premium beef cut suitable for steak tartare dishes.",
    pricePerKg: 44,
    weightOptions: [
      { kg: 1, price: 44 },
    ],
  },

  {
    name: "Buffel Bavette",
    englishName: "Bavette",
    image: ImgBuffelBavette,
    description:
      "Flavourful beef cut with a distinctive texture and rich character.",
    pricePerKg: 44,
    weightOptions: [
      { kg: 1, price: 44 },
    ],
  },

  // {
  //   name: "Buffel Biefstuk",
  //   englishName: "Buffalo Beef Steak",
  //   image: ImgBuffelBiefstuk,
  //   description:
  //     "Premium buffalo steak suitable for grilling or pan-searing.",
  //   pricePerKg: 44,
  //   weightOptions: [
  //     { kg: 1, price: 44 },
  //   ],
  // },

  {
    name: "Buffel T-Bone",
    englishName: "T-Bone Steak",
    image: ImgBuffelTBone,
    description:
      "Classic T-bone cut combining tender steak with rich beef flavour.",
    pricePerKg: 44,
    weightOptions: [
      { kg: 1, price: 44 },
    ],
  },

  {
    name: "Buffel Entrecote",
    englishName: "Entrecote",
    image: ImgBuffelEntrecote,
    description:
      "Tender and flavourful steak cut with a satisfying beef character.",
    pricePerKg: 44,
    weightOptions: [
      { kg: 1, price: 44 },
    ],
  },

  // {
  //   name: "Entrecote",
  //   englishName: "Entrecote",
  //   image: ImgEntrecote,
  //   description:
  //     "Classic entrecote cut with a rich flavour and tender texture.",
  //   pricePerKg: 44,
  //   weightOptions: [
  //     { kg: 1, price: 44 },
  //   ],
  // },

  {
    name: "Buffel Jodenhaas",
    englishName: "Jodenhaas",
    image: ImgBuffelJodenhaas,
    description:
      "Tender buffalo cut ideal for premium steak preparations.",
    pricePerKg: 38.5,
    weightOptions: [
      { kg: 1, price: 38.5 },
    ],
  },

  {
    name: "Buffel Longhaas",
    englishName: "Longhaas",
    image: ImgBuffelLonghaas,
    description:
      "Distinctive premium cut with a rich flavour and firm texture.",
    pricePerKg: 38.5,
    weightOptions: [
      { kg: 1, price: 38.5 },
    ],
  },

  {
    name: "Buffel Côte du Boeuf",
    englishName: "Côte du Boeuf",
    image: ImgBuffelCoteDuBoeuf,
    description:
      "Generous bone-in beef cut suited to roasting and grilling.",
    pricePerKg: 33,
    weightOptions: [
      { kg: 1, price: 33 },
    ],
  },

  {
    name: "Buffel Ossenworst",
    englishName: "Ossenworst",
    image: ImgBuffelOssenworst,
    description:
      "Traditional buffalo beef sausage with a rich savoury flavour.",
    pricePerKg: 33,
    weightOptions: [
      { kg: 1, price: 33 },
    ],
  },

  {
    name: "Gourmet vlees",
    englishName: "Gourmet Meat",
    image: ImgGourmetVlees,
    description:
      "Selection of meat suited for gourmet-style cooking and sharing.",
    pricePerKg: 33,
    weightOptions: [
      { kg: 1, price: 33 },
    ],
  },

  {
    name: "Buffel Picanha",
    englishName: "Picanha",
    image: ImgBuffelPicanha,
    description:
      "Flavourful cut known for its rich texture and excellent grilling qualities.",
    pricePerKg: 32.45,
    weightOptions: [
      { kg: 1, price: 32.45 },
    ],
  },

  {
    name: "Buffel Rosbief",
    englishName: "Roast Beef",
    image: ImgBuffelRosbief,
    description:
      "Classic roasting cut offering rich flavour and tender slices.",
    pricePerKg: 27.5,
    weightOptions: [
      { kg: 1, price: 27.5 },
    ],
  },

  {
    name: "Buffel Saté",
    englishName: "Satay",
    image: ImgBuffelSate,
    description:
      "Buffalo meat prepared for satay-style cooking and grilling.",
    pricePerKg: 27.5,
    weightOptions: [
      { kg: 1, price: 27.5 },
    ],
  },

  {
    name: "Buffel Short Ribs",
    englishName: "Short Ribs",
    image: ImgBuffelShortRibs,
    description:
      "Rich meaty ribs suited for slow cooking, smoking and barbecue.",
    pricePerKg: 27.5,
    weightOptions: [
      { kg: 1, price: 27.5 },
    ],
  },

  {
    name: "Buffel Braadstuk",
    englishName: "Roasting Joint",
    image: ImgBuffelBraadstuk,
    description:
      "Substantial buffalo roasting cut ideal for slow roasting.",
    pricePerKg: 27.5,
    weightOptions: [
      { kg: 1, price: 27.5 },
    ],
  },

  {
    name: "Buffel Rollade",
    englishName: "Rolled Roast",
    image: ImgBuffelRollade,
    description:
      "Prepared rolled cut designed for roasting and family meals.",
    pricePerKg: 27.5,
    weightOptions: [
      { kg: 1, price: 27.5 },
    ],
  },
];


const otherProducts = [
  {
    name: "Buffel Sukade",
    englishName: "Chuck Blade",
    image: ImgBuffelSukade,
    description:
      "Richly flavoured cut particularly suited to slow cooking.",
    pricePerKg: 24.86,
    weightOptions: [
      { kg: 1, price: 24.86 },
    ],
  },

  {
    name: "Buffel Riblappen",
    englishName: "Beef Ribs / Braising Cut",
    image: ImgBuffelRiblappen,
    description:
      "Flavourful buffalo cut ideal for braising and slow-cooked dishes.",
    pricePerKg: 24.86,
    weightOptions: [
      { kg: 1, price: 24.86 },
    ],
  },

  {
    name: "Buffel Tong",
    englishName: "Beef Tongue",
    image: ImgBuffelTong,
    description:
      "Traditional beef tongue sold individually.",
    pricePerKg: null,
    weightOptions: [
      { kg: null, label: "1 piece", price: 24.75 },
    ],
  },

  {
    name: "Stoofpotje kant en klaar",
    englishName: "Ready-Made Stew",
    image: ImgStoofpotjeKantEnKlaar,
    description:
      "Ready-made stew prepared for convenient serving.",
    pricePerKg: null,
    weightOptions: [
      { kg: null, label: "Fixed price", price: 22.55 },
    ],
  },

  {
    name: "Buffel Saucijzen",
    englishName: "Buffalo Sausages",
    image: ImgBuffelSaucijzen,
    description:
      "Savoury buffalo sausages suitable for everyday cooking.",
    pricePerKg: 22,
    weightOptions: [
      { kg: 1, price: 22 },
    ],
  },

  {
    name: "Buffel Gourmet pakket",
    englishName: "Gourmet Package",
    image: ImgBuffelGourmetPakket,
    description:
      "Buffalo meat selection prepared for gourmet dining.",
    pricePerKg: 22,
    weightOptions: [
      { kg: 1, price: 22 },
    ],
  },

  {
    name: "Buffel Braadlappen",
    englishName: "Braising Steaks",
    image: ImgBuffelBraadlappen,
    description:
      "Classic braising cut designed for slow cooking until tender.",
    pricePerKg: 21.96,
    weightOptions: [
      { kg: 1, price: 21.96 },
    ],
  },

  {
    name: "Buffel Magere lappen",
    englishName: "Lean Beef Steaks",
    image: ImgBuffelMagereLappen,
    description:
      "Lean buffalo beef cut suitable for everyday cooking.",
    pricePerKg: 21.96,
    weightOptions: [
      { kg: 1, price: 21.96 },
    ],
  },

  {
    name: "Buffel Hachee vlees",
    englishName: "Hachee Meat",
    image: ImgBuffelHacheeVlees,
    description:
      "Cut prepared for traditional slow-cooked hachee dishes.",
    pricePerKg: 21.45,
    weightOptions: [
      { kg: 1, price: 21.45 },
    ],
  },

  {
    name: "Buffel Soepvlees",
    englishName: "Soup Meat",
    image: ImgBuffelSoepvlees,
    description:
      "Rich beef cut suited to soups, broths and slow cooking.",
    pricePerKg: 21.34,
    weightOptions: [
      { kg: 1, price: 21.34 },
    ],
  },

  {
    name: "Buffel Barbeque worsten",
    englishName: "Barbecue Sausages",
    image: ImgBuffelBarbequeWorsten,
    description:
      "Buffalo sausages made for grilling and barbecue meals.",
    pricePerKg: 19.25,
    weightOptions: [
      { kg: 1, price: 19.25 },
    ],
  },

  {
    name: "Buffel Schnitzel",
    englishName: "Schnitzel",
    image: ImgBuffelSchnitzel,
    description:
      "Thin buffalo cut suitable for breading, frying and quick meals.",
    pricePerKg: 18.15,
    weightOptions: [
      { kg: 1, price: 18.15 },
    ],
  },

  {
    name: "Buffel Wok vlees",
    englishName: "Wok Meat",
    image: ImgBuffelWokVlees,
    description:
      "Conveniently suited for quick wok dishes and stir-fries.",
    pricePerKg: 18.15,
    weightOptions: [
      { kg: 1, price: 18.15 },
    ],
  },

  {
    name: "Buffel Baklappen",
    englishName: "Pan-Frying Steaks",
    image: ImgBuffelBaklappen,
    description:
      "Versatile thin-cut beef suitable for quick pan cooking.",
    pricePerKg: 17.6,
    weightOptions: [
      { kg: 1, price: 17.6 },
    ],
  },

  {
    name: "Buffel Bieflappen",
    englishName: "Beef Steaks",
    image: ImgBuffelBieflappen,
    description:
      "Versatile buffalo beef cut suitable for frying and everyday meals.",
    pricePerKg: 17.6,
    weightOptions: [
      { kg: 1, price: 17.6 },
    ],
  },

  {
    name: "Buffel Gehakt",
    englishName: "Minced Buffalo Beef",
    image: ImgBuffelGehakt,
    description:
      "Versatile minced buffalo beef for burgers, sauces and everyday dishes.",
    pricePerKg: 17.55,
    weightOptions: [
      { kg: 1, price: 17.55 },
    ],
  },

  {
    name: "Buffel Reepjes",
    englishName: "Beef Strips",
    image: ImgBuffelReepjes,
    description:
      "Convenient beef strips ideal for quick cooking and stir-fries.",
    pricePerKg: 17.49,
    weightOptions: [
      { kg: 1, price: 17.49 },
    ],
  },

  {
    name: "Buffel Shoarma",
    englishName: "Shawarma Meat",
    image: ImgBuffelShoarma,
    description:
      "Seasoning-friendly sliced buffalo meat for shawarma-style dishes.",
    pricePerKg: 17.49,
    weightOptions: [
      { kg: 1, price: 17.49 },
    ],
  },

  {
    name: "Buffel Hart",
    englishName: "Beef Heart",
    image: ImgBuffelHart,
    description:
      "Traditional buffalo heart cut for specialised cooking.",
    pricePerKg: 16.5,
    weightOptions: [
      { kg: 1, price: 16.5 },
    ],
  },

  {
    name: "Buffel Soepschenkel",
    englishName: "Soup Shank",
    image: ImgBuffelSoepschenkel,
    description:
      "Bone-in cut suited to rich soups, stocks and slow cooking.",
    pricePerKg: 16.5,
    weightOptions: [
      { kg: 1, price: 16.5 },
    ],
  },

  {
    name: "Buffel Mergpijpjes",
    englishName: "Marrow Bones",
    image: ImgBuffelMergpijpjes,
    description:
      "Marrow-rich bones suitable for broths, stocks and roasting.",
    pricePerKg: 12.98,
    weightOptions: [
      { kg: 1, price: 12.98 },
    ],
  },

  {
    name: "Buffel Lever",
    englishName: "Beef Liver",
    image: ImgBuffelLever,
    description:
      "Traditional buffalo liver cut for a variety of preparations.",
    pricePerKg: 12.1,
    weightOptions: [
      { kg: 1, price: 12.1 },
    ],
  },

  {
    name: "Buffel Kniestukken",
    englishName: "Knee Pieces",
    image: ImgBuffelKniestukken,
    description:
      "Traditional buffalo cut suitable for stocks and slow cooking.",
    pricePerKg: 11,
    weightOptions: [
      { kg: 1, price: 11 },
    ],
  },

  {
    name: "Buffel Niervet",
    englishName: "Kidney Fat",
    image: ImgBuffelNiervet,
    description:
      "Traditional buffalo kidney fat for culinary preparation.",
    pricePerKg: 11,
    weightOptions: [
      { kg: 1, price: 11 },
    ],
  },

  {
    name: "Buffel Burger groot (4 stuks)",
    englishName: "Large Buffalo Burger - 4 Pieces",
    image: ImgBuffelBurgerGroot4,
    description:
      "Large buffalo burgers supplied as a four-piece pack.",
    pricePerKg: null,
    weightOptions: [
      { kg: null, label: "4 pieces", price: 11 },
    ],
  },

  {
    name: "Buffel Burger klein (4 stuks)",
    englishName: "Small Buffalo Burger - 4 Pieces",
    image: ImgBuffelBurgerKlein4,
    description:
      "Small buffalo burgers supplied as a four-piece pack.",
    pricePerKg: null,
    weightOptions: [
      { kg: null, label: "4 pieces", price: 9.9 },
    ],
  },

  {
    name: "Buffel Soepbotten",
    englishName: "Soup Bones",
    image: ImgBuffelSoepbotten,
    description:
      "Buffalo soup bones suitable for rich stocks and broths.",
    pricePerKg: 6.6,
    weightOptions: [
      { kg: 1, price: 6.6 },
    ],
  },

  {
    name: "Buffel Stokjes",
    englishName: "Meat Sticks",
    image: ImgBuffelStokjes,
    description:
      "Buffalo meat sticks sold individually.",
    pricePerKg: null,
    weightOptions: [
      { kg: null, label: "1 piece", price: 3.69 },
    ],
  },

  {
    name: "Buffel Slavinken",
    englishName: "Slavink",
    image: ImgBuffelSlavinken,
    description:
      "Traditional buffalo meat preparation sold individually.",
    pricePerKg: null,
    weightOptions: [
      { kg: null, label: "1 piece", price: 3.29 },
    ],
  },

  {
    name: "Buffel Burger groot",
    englishName: "Large Buffalo Burger",
    image: ImgBuffelBurgerGroot,
    description:
      "Large individual buffalo burger.",
    pricePerKg: null,
    weightOptions: [
      { kg: null, label: "1 piece", price: 2.75 },
    ],
  },

  {
    name: "Buffel Burger klein",
    englishName: "Small Buffalo Burger",
    image: ImgBuffelBurgerKlein,
    description:
      "Small individual buffalo burger.",
    pricePerKg: null,
    weightOptions: [
      { kg: null, label: "1 piece", price: 2.48 },
    ],
  },
];


/*
|--------------------------------------------------------------------------
| PRODUCT CARD
|--------------------------------------------------------------------------
*/

const ProductCard = ({ item }) => {
  const { addToCart, cartItems } = useCart();

  const [added, setAdded] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(0);

  const selected = item.weightOptions[selectedIdx];

  const selectedWeight = selected.label ?? `${selected.kg} kg`;

  const inCart = cartItems.find(
    (i) =>
      i.name === item.name &&
      i.weight === selectedWeight
  );

  const handleAdd = () => {
    addToCart({
      name: item.name,
      englishName: item.englishName,
      weight: selectedWeight,
      price: selected.price,
      image: item.image,
    });

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  return (
    <div className="recipe-card">

      <div className="recipe-image-wrapper">

        <img
          src={Logo}
          alt="Company Logo"
          className="product-logo"
        />

        <img
          src={item.image}
          alt={item.name}
          className="recipe-image"
        />

        {inCart && (
          <div className="card-in-cart-badge">
            {inCart.qty} in cart
          </div>
        )}

      </div>

      <div className="recipe-content">

        <span className="recipe-category">
          PREMIUM QUALITY
        </span>

        <h3 className="recipe-title">
          {item.name}
        </h3>

        <p className="recipe-english-name">
          {item.englishName}
        </p>

        <p className="recipe-description">
          {item.description}
        </p>

        <div className="recipe-footer">

          <div className="recipe-meta">

            <div className="weight-select-wrap">

              <label className="weight-select-label">
                {item.pricePerKg !== null ? "Weight" : "Quantity"}
              </label>

              <select
                className="weight-select"
                value={selectedIdx}
                onChange={(e) =>
                  setSelectedIdx(Number(e.target.value))
                }
              >
                {item.weightOptions.map((opt, i) => (
                  <option
                    key={i}
                    value={i}
                  >
                    {opt.label ?? `${opt.kg} kg`}
                  </option>
                ))}
              </select>

            </div>

            <span className="recipe-price">
              €{selected.price.toFixed(2)}
            </span>

          </div>

          <button
            className={`add-to-cart-btn ${
              added ? "added" : ""
            }`}
            onClick={handleAdd}
          >
            {added ? "✓ Added!" : "+ Add to Cart"}
          </button>

        </div>

      </div>

    </div>
  );
};


/*
|--------------------------------------------------------------------------
| PRODUCTS PAGE
|--------------------------------------------------------------------------
*/

const Products = () => {
  return (
    <div className="products-page">

      <div className="products-header">

        <h1>
          Available Meat Products
        </h1>

        <p>
          Premium quality buffalo and beef products sourced
          and processed with care.
        </p>

      </div>


      {/*--------------------------------------------------------------
          PREMIUM CUTS
      --------------------------------------------------------------*/}

      <h2 className="section-title">
        Premium Cuts
      </h2>

      <div className="product-grid">

        {availableMeat.map((item, index) => (
          <ProductCard
            key={index}
            item={item}
          />
        ))}

      </div>


      {/*--------------------------------------------------------------
          OTHER PRODUCTS
      --------------------------------------------------------------*/}

      <h2 className="section-title">
        Other Available Products
      </h2>

      <div className="product-grid">

        {otherProducts.map((item, index) => (
          <ProductCard
            key={index}
            item={item}
          />
        ))}

      </div>

    </div>
  );
};


export default Products;
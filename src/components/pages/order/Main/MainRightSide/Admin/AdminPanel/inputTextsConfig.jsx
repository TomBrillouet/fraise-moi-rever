import { BsFillCameraFill } from "react-icons/bs"
import { MdOutlineEuro } from "react-icons/md"
import { RiDrinksFill } from "react-icons/ri"

export const getInputTextsConfig = (newProduct) => [
  {
    id: 0,
    name: "title",
    value: newProduct.title,
    placeholder: "Nom du produit (ex: Super Smoothie)",
    Icon: <RiDrinksFill />,
  },
  {
    id: 1,
    name: "imageSource",
    value: newProduct.imageSource,
    placeholder:
      "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    Icon: <BsFillCameraFill />,
  },
  {
    id: 2,
    name: "price",
    value: newProduct.price ? newProduct.price : "",
    placeholder: "Prix",
    Icon: <MdOutlineEuro />,
  },
]

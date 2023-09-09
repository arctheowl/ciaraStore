import Head from "next/head";
import "~/styles/globals.css";
import Checkout from "~/components/Checkout"

const page = () => {
  return (
    <div>
        <Checkout />
    </div>
  )
}

export default page
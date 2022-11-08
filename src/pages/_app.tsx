import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import logoImg from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app";
import Link from "next/link";
import Image from "next/image";

globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href='/'>
          <Image src={logoImg.src} alt="" width={200} height={50}/>
        </Link>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp

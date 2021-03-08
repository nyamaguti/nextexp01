import Link from 'next/link'

//import ReactDOM from "react-dom";
//import "./styles.css";

//<!-- -->
//export default() => {
//    return "Page TWO in construction!!!"
//}

export default function SecondPost() {
  return (
    <>
      <h1>Second Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}

//export default function Post02() {
//   return <h1>Second Post in construction!!!</h1>
//}
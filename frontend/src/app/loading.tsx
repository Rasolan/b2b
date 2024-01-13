import Image from "next/image"

import LoadingIcon from '$/public/svg/logo.svg'
import LoadingSpirale from '$/public/svg/loading.svg'
import './loading.css'
export default function Loading() {
    // Or a custom loading skeleton component
    return <div className="loading">
        <Image className="loadingLogo" height={257} width={257} src={LoadingIcon} alt={"Logo"} ></Image>
        <Image className="loadingSpirale" height={77} width={77} src={LoadingSpirale} alt={"Loading"} ></Image>
    </div>
  }
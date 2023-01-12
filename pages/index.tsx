import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";
import Image from "next/image";

export default function Home({
	allPostsData,
}: {
	allPostsData: {
		date: string;
		title: string;
		id: string;
	}[];
}) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section>
				<div
					style={{
						width: "100%",
						height: "1000px",
						position: "relative",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Image
						src={"/images/FirstRowImage.svg"}
						alt="Line1"
						fill
						style={{
							background: "#53beb3ff",
							objectFit: "cover",
						}}
					/>
					<div
						style={{
							position: "absolute",
							textAlign: "center",
							color: "white",
							fontSize: "3.7rem",
							maxWidth: "470px",
							lineHeight: "70px",
						}}
					>
						Pickies ile siparişini ver,{" "}
						<i>sıra beklemeden teslim al!</i>
					</div>
				</div>
				<div
					style={{
						width: "100%",
						height: "300px",
						background: " #fffdedff",
						position: "relative",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<div
						style={{
							position: "absolute",
							maxWidth: "650px",
							fontFamily: "Work Sans",
							fontSize: "19px",
							letterSpacing: "3px",
							lineHeight: "30px",
							textAlign: "center",
						}}
					>
						SADECE TEK BİR TIKLA BULUNDUĞUN BÖLGEDEKİ CAFE VE
						RESTORANLARIN MENÜLERİNE ULAŞ, SİPARİŞİNİ VER VE
						<b>
							{" "}
							PICIKIES TESLİM NOKTASINDAN SANİYELER İÇİNDE
							SİPARİŞİNİ AL
						</b>
					</div>
				</div>
				<div
					style={{
						width: "100%",
						height: "600px",
						background: " #f7b76aff",
						position: "relative",
						display: "grid",
						gridTemplateColumns: " 1fr 1fr",
						gridTemplateRows: "1fr",
						gap: "0px 0px",
						gridTemplateAreas: " 'image text'",
						justifyItems: "center",
						alignItems: "center",
					}}
				>
					<div
						style={{
							width: "400px",
							height: "400px",
							position: "absolute",
							gridArea: "image",
						}}
					>
						<Image
							src={"/images/ThirdRowImage.svg"}
							alt="Line1"
							fill
							style={{
								objectFit: "contain",
							}}
						/>
						<div
							style={{
								position: "absolute",
								top: "50%",
								left: "50%",
								transform:
									"translate(-50%, -50%) rotate(-7deg)",
								textAlign: "center",
								color: "#f7b76aff",
								fontSize: "3rem",
								fontWeight: "bold",
								maxWidth: "470px",
								lineHeight: "50px",
								letterSpacing: "-3px",
								fontFamily: "Clearface",
							}}
						>
							Pickies Mobil Uygulama Nedir?
						</div>
					</div>
					<div style={{ gridArea: "text" }}>
						Lorem ipsum dolor sit amet, consectetuer adipiscing
						elit, sed diam nonummy nibh euismod tincidunt ut laoreet
						dolore magna aliquam erat volutpat. Ut wisi enim ad
						minim veniam, quis nostrud exerci tation ullamcorper
						suscipit lobortis nisl ut aliquip ex ea commodo
						consequat.
					</div>
				</div>
			</section>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
};

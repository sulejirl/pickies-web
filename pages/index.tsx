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
				<div style={{
					width: "100%",
					height: "600px",
					padding: "50px 50px",
					background: " #fffdedff",
					position: "relative",
					display: "grid",
					gridTemplateColumns: " 1fr 1fr 1fr",
					gridTemplateRows: "1fr",
					gap: "0px 10px",
					gridTemplateAreas: " 'partner user contactus'",
					justifyItems: "center",
					alignItems: "center",
					fontFamily: "Work Sans",
				}}>
					<div style={{
						gridArea: "partner",
						width: "100%",
						height: "100%",
						borderRight: "1px solid black",

						gap: "10px 0px",
						display: "grid",
						gridTemplateRows: " 100px 30px 200px 50px",
						gridTemplateColumns: "1fr",
						gridTemplateAreas: " 'icon' 'title' 'content' 'button'	",
						padding: '50px',
					}}>
						<div style={{
							gridArea: "icon",
							width: "100%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",

						}}>
							<Image
								src={"/images/partnerIcon.png"}
								alt="partner"
								width={50}
								height={40}
								style={{
								}}
							/>
						</div>
						<div style={{
							gridArea: "title",
							width: "100%",
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',

						}}>
							PARTNERLERİMİZ İÇİN
						</div>
						<div style={{
							gridArea: "content",
							width: "100%",
							textAlign: "center",

						}}>
							Sıra beklememek için sizi es geçen müşterilerinizi kaybetmeyin. Bizimle ortaklık kurarak işinizi büyütün ve yeni müşterilere ulaşın.
						</div>
						<div style={{
							gridArea: "button",
							width: "100%",
							textAlign: "center",
							color: "#53beb3ff",
							textDecoration: "underline",

							cursor: "pointer",

						}}>
							FORMU DOLDUR
						</div>
					</div>
					<div style={{
						gridArea: "user",
						width: "100%",
						height: "100%",
						borderRight: "1px solid black",

						gap: "10px 0px",
						display: "grid",
						gridTemplateRows: " 100px 30px 200px 50px",
						gridTemplateColumns: "1fr",
						gridTemplateAreas: " 'icon' 'title' 'content' 'button'	",
						padding: '50px',
					}}>
						<div style={{
							gridArea: "icon",
							width: "100%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",

						}}>
							<Image
								src={"/images/userIcon.png"}
								alt="partner"
								width={40}
								height={50}
								style={{
								}}
							/>
						</div>
						<div style={{
							gridArea: "title",
							width: "100%",
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',

						}}>
							KULLANICILARIMIZ İÇİN
						</div>
						<div style={{
							gridArea: "content",
							width: "100%",
							textAlign: "center",


						}}>
							Bulunduğunuz
							bölgedeki cafe ve
							restoranlardan anında
							sipariş oluşturun,
							siparişinizi sıra
							beklemeden
							teslim alın.
						</div>
						<div style={{
							gridArea: "button",
							width: "100%",
							textAlign: "center",
							color: "#53beb3ff",
							textDecoration: "underline",
							cursor: "pointer",

						}}>
							UYGULAMAYI İNDİR
						</div>
					</div>
					<div style={{
						gridArea: "contactus",
						width: "100%",
						height: "100%",

						gap: "10px 0px",
						display: "grid",
						gridTemplateRows: " 100px 30px 200px 50px",
						gridTemplateColumns: "1fr",
						gridTemplateAreas: " 'icon' 'title' 'content' 'button'	",
						padding: '50px',

					}}>
						<div style={{
							gridArea: "icon",
							width: "100%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",

						}}>
							<Image
								src={"/images/contactUsIcon.png"}
								alt="partner"
								width={40}
								height={40}
								style={{
								}}
							/>
						</div>
						<div style={{
							gridArea: "title",
							width: "100%",
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',

						}}>
							BİZE ULAŞIN
						</div>
						<div style={{
							gridArea: "content",
							width: "100%",
							textAlign: "center",

						}}>
							Her türlü soru,
							destek ve
							görüşleriniz için
							bizimle iletişime
							geçin.
						</div>
						<div style={{
							gridArea: "button",
							width: "100%",
							textAlign: "center",
							color: "#53beb3ff",
							textDecoration: "underline",
							cursor: "pointer",

						}}>
							İLETİŞİME GEÇ
						</div>
					</div>
				</div>
				<div
					style={{
						width: "100%",
						height: "600px",
						background: " #beacd3ff",
						position: "relative",
						display: "grid",
						gridTemplateColumns: " 60% 40%",
						gridTemplateRows: "1fr",
						gap: "0px 0px",
						gridTemplateAreas: " 'text image'",
						justifyItems: "center",
						alignItems: "center",
					}}>
					<div style={{
						display: 'grid',
						gridArea: 'text',
						width: "100%",
						height: "100%",
						gridTemplateRows: " 60% 40%",
						gridTemplateColumns: "1fr",
						gridTemplateAreas: " 'title' 'content'",

					}}>

						<div style={{ gridArea: 'title', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', padding: '40px 100px', color: 'white', fontSize: '50px', lineHeight: '55px', fontFamily: 'ClearFace', fontWeight: 'bold' }}>
							Evden çıkarken,
							yolda yürürken,
							hatta mekanın
							kapısındayken tek
							tuşla siparişini ver!
						</div>
						<div style={{ gridArea: 'content', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '40px 100px', color: 'white', fontSize: '17px', lineHeight: '20px', fontFamily: 'Work Sans' }}>
							KAFELERDE SIRA BEKLEMENİN NE KADAR CAN
							SIKICI OLDUĞUNU BİLİYORUZ. BU SEBEPLE ARTIK
							“PICKIES” DİYORUZ. PICKIES İLE SADECE 2 ADIMDA
							SİPARİŞİNİZİ VEREBİLİR VE BİZE AYRILMIŞ TESLİM
							NOKTALARINDAN SANİYELER İÇERİSİNDE TESLİM
							ALABİLİRSİNİZ. SIRA BEKLEMEDEN ALINAN
							KAHVENİN TADI DA DAHA LEZZETLİ GELMİYOR MU?
						</div>
					</div>
					<div style={{ gridArea: 'image', position: 'relative', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '100%', height: '100%' }}>
						<Image
							src={"/images/fifthRowImage.png"}
							alt="Line1"
							fill
							style={{
								objectFit: "cover",
							}}
						/>
					</div>

				</div>
				<div
					style={{
						width: "100%",
						height: "600px",
						background: " #fffdedff",
						position: "relative",
						display: "grid",
						gridTemplateColumns: " 40% 60%",
						gridTemplateRows: "1fr",
						gap: "0px 0px",
						gridTemplateAreas: " 'image text'",
						justifyItems: "center",
						alignItems: "center",
					}}>
					<div style={{ gridArea: 'image', position: 'relative', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', width: '100%', height: '100%' }}>
						<Image
							src={"/images/sixthRowImage.png"}
							alt="Line1"
							width={400}
							height={400}
							style={{
								objectFit: "cover",
							}}
						/>
					</div>
					<div style={{
						display: 'grid',
						gridArea: 'text',
						width: "100%",
						height: "100%",
						gridTemplateRows: " 60% 40%",
						gridTemplateColumns: "1fr",
						gridTemplateAreas: " 'title' 'content'",

					}}>

						<div style={{ gridArea: 'title', display: 'flex', textAlign: 'right', justifyContent: 'center', alignItems: 'flex-end', padding: '40px 150px 40px 50px', color: '#53beb3ff', fontSize: '50px', lineHeight: '55px', fontFamily: 'ClearFace', fontWeight: 'bold' }}>
							Topluluk sayfası
							üzerinden
							arkadaşlarınla
							etkileşimde kal!
						</div>
						<div style={{ gridArea: 'content', display: 'flex', textAlign: 'right', justifyContent: 'center', alignItems: 'flex-start', padding: '40px 150px 40px 50px', color: '#53beb3ff', fontSize: '17px', lineHeight: '20px', fontFamily: 'Work Sans' }}>
							ARKADAŞLARINIZ BİR SİPARİŞ VERDİĞİNDE ONLARIN
							NEREDE OLDUĞUNU GÖREBİLİR VE ETKİLEŞİME
							GEÇEBİLİRSİNİZ. BELKİ DE ONLARA İÇTİKLERİ KAHVENİN
							YANINDA SÜRPRİZ BİR TATLI YOLLAMAK İSTERSİNİZ.
							PICKIES İLE İSTER SIRA BEKLEMEDEN KAHVENİZİ ALIN,
							İSTER BİR ARKADAŞINIZIN YANINA UĞRAYIP SELAM VERİN.
							SEÇİMİ SİZE BIRAKIYORUZ!
						</div>
					</div>


				</div>
				<div
					style={{
						width: "100%",
						height: "600px",
						background: " #53beb3ff",
						position: "relative",
						display: "grid",
						gridTemplateColumns: " 60% 40%",
						gridTemplateRows: "1fr",
						gap: "0px 0px",
						gridTemplateAreas: " 'text image'",
						justifyItems: "center",
						alignItems: "center",
					}}>
					<div style={{
						display: 'grid',
						gridArea: 'text',
						width: "100%",
						height: "100%",
						gridTemplateRows: " 60% 40%",
						gridTemplateColumns: "1fr",
						gridTemplateAreas: " 'title' 'content'",

					}}>

						<div style={{ gridArea: 'title', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', padding: '40px 50px 40px 150px', color: 'white', fontSize: '50px', lineHeight: '55px', fontFamily: 'ClearFace', fontWeight: 'bold' }}>
							“Hediye Gönder”
							özelliği ile
							arkadaşlarına
							dilediğini ısmarla!
						</div>
						<div style={{ gridArea: 'content', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '40px 50px 40px 150px', color: 'white', fontSize: '17px', lineHeight: '20px', fontFamily: 'Work Sans' }}>
							PICKIES SADECE KULLANICISINI DEĞİL,
							ONUN ARKADAŞLARINI DA DÜŞÜNÜR.
							ARKADAŞLARINIZA BİR JEST YAPIP ONLARA BİR KAHVE YA
							DA YEMEK ISMARLAMAK HOŞ OLMAZ MIYDI? PICKIES
							UYGULAMASININ “HEDİYE GÖNDER” ÖZELLİĞİ İLE
							ARKADAŞLARINIZA SÜRPRİZ YAPABİLİRSİNİZ.
						</div>
					</div>
					<div style={{ gridArea: 'image', position: 'relative', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '100%', height: '100%' }}>
						<Image
							src={"/images/seventhRowImage.png"}
							alt="Line1"
							fill
							style={{
								objectFit: "cover",
							}}
						/>
					</div>

				</div>
				<div
					style={{
						width: "100%",
						height: "300px",
						background: " #fffdedff",
						position: "relative",
						display: "grid",
						gridTemplateColumns: " 1fr",
						gridTemplateRows: "auto auto auto",
						gap: "0px 0px",
						gridTemplateAreas: " 'title' 'input' 'socialmedia'",
						justifyItems: "center",
						alignItems: "center",
					}}>
					<div style={{ gridArea: 'title', fontFamily:'ClearFace', fontWeight:'bold',fontSize:'24px' }}>
						Gelişmelerden haberdar olabilmek için bültene kayıt olun.
					</div>
					<div style={{ gridArea: 'input' }}>
						asd
					</div>
					<div style={{ gridArea: 'socialmedia' }}>
						asd
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

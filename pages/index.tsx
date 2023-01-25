import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";
import Image from "next/image";
import { FormControl, FormLabel, FormHelperText, TextField, Button, InputAdornment } from '@mui/material'
import FormGroup from "@mui/material/FormGroup";

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
						height: "200px",
						position: "relative",
						display: "flex",
						justifyContent: "center",
						alignContent: "center",
						padding: '0 100px'
					}}
				>
					<div style={{
						textAlign: "left",
						color: "#f7b76aff",
						textDecoration: "underline",
						cursor: "pointer",
						position: 'absolute',
						left: 0,
						right: 0,
						top:20,
						marginLeft: '100px',
						marginRight: 'auto',
						width: '100px'
					}}>
						MENÜ
					</div>
					<div style={{
						position: 'absolute',
						left: 0,
						right: 0,
						top:20,
						marginLeft: 'auto',
						marginRight: 'auto',
						width: '300px'
					}}>
						<Image
							src={"/images/logoMain.png"}
							alt="Line1"
							height={120}
							width={300}

						/>
					</div>
					<div
						style={{
							textAlign: "right",
							color: "#f7b76aff",
							textDecoration: "underline",
							cursor: "pointer",
							position: 'absolute',
							left: 0,
							right: 0,
							top:20,
							marginLeft: 'auto',
							marginRight: '100px',
							width: '200px'

						}}>
						FİRMA GİRİŞİ
					</div>
				</div>
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
					fontWeight: "bold",
					fontFamily: "Work Sans",
				}}>
					<div style={{
						gridArea: "partner",
						width: "100%",
						height: "100%",
						borderRight: "1px solid black",

						gap: "10px 0px",
						display: "grid",
						gridTemplateRows: " 10fr 3fr 20fr 5fr",
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
						gridTemplateRows: " 10fr 3fr 20fr 5fr",
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
					<div style={{ gridArea: 'title', fontFamily: 'ClearFace', fontWeight: 'bold', fontSize: '24px' }}>
						Gelişmelerden haberdar olabilmek için bültene kayıt olun.
					</div>
					<div style={{ gridArea: 'input' }}>
						<form onSubmit={() => { }} id="demo">
							<FormControl>
								<FormGroup row>
									<TextField
										// sx={{ '--Input-decorator-childHeight': '45px' }}
										placeholder="E-POSTA ADRESİNİZİ GİRİNİZ"
										type="email"
										required

										sx={{ borderRadius: '5px', backgroundColor: '#fffdedff', borderTopRightRadius: 0, borderBottomRightRadius: 0, width: '500px' }}
										size="small"
										InputProps={{
											sx: { borderTopRightRadius: 0, borderBottomRightRadius: 0, }

										}}

									/>
									<Button
										variant="contained"
										color="primary"
										type="submit"
										sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, backgroundColor: '#ff8c00', color: 'white' }}
									>
										Gönder
									</Button>
								</FormGroup>

								{/* {data.status === 'failure' && (
									<FormHelperText
										sx={(theme) => ({ color: theme.vars.palette.danger[400] })}
									>
										Oops! something went wrong, please try again later.
									</FormHelperText>
								)}
								{data.status === 'sent' && (
									<FormHelperText
										sx={(theme) => ({ color: theme.vars.palette.primary[400] })}
									>
										You are all set!
									</FormHelperText>
								)} */}
							</FormControl>
						</form>
					</div>
					<div style={{ gridArea: 'socialmedia', display: 'flex', justifyContent: "space-around", width: '100%', padding: '0 100px' }}>
						<div style={{ display: 'flex', alignItems: 'center', }}>
							<Image
								src={"/images/Instagram.png"}
								alt="Line1"
								height={25}
								width={25}
							/>

							<div style={{ marginLeft: '8px', fontWeight: 'bold', fontFamily: "Work Sans", }}>@pickiesapp</div>
						</div>
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<Image
								src={"/images/twitter.png"}
								alt="Line1"
								height={25}
								width={30}
							/>
							<div style={{ marginLeft: '8px', fontWeight: 'bold', fontFamily: "Work Sans", }}>@pickiesapp</div>
						</div>
						<div style={{ display: 'flex', alignItems: 'center', }}>
							<Image
								src={"/images/website.png"}
								alt="Line1"
								height={25}
								width={30}
							/>
							<div style={{ marginLeft: '8px', fontWeight: 'bold', fontFamily: "Work Sans", }}>pickiesapp.com</div>
						</div>
					</div>
				</div>
				<div
					style={{
						width: "100%",
						height: "400px",
						background: " #f7b76aff",
						position: "relative",
						display: "grid",
						gridTemplateColumns: " 1fr",
						gridTemplateRows: "4fr 1fr",
						gap: "0px 0px",
						gridTemplateAreas: " 'main' 'secondary'",
						justifyItems: "center",
						alignItems: "center",
					}}>
					<div style={{ width: '100%', gridArea: 'main', display: 'grid', gridTemplateAreas: "'logo menu'", gridTemplateColumns: "1fr 2fr", gridTemplateRows: "1fr", padding: '0 150px 20px 150px' }}>
						<div style={{ position: 'relative', gridArea: 'logo' }}>
							<Image
								src={"/images/Logo.png"}
								alt="Line1"
								fill
								style={{ paddingTop: '100px' }}
							/></div>
						<div style={{
							gridArea: 'menu',
							display: 'grid',
							gridTemplateColumns: " 1fr 1fr 1fr",
							gridTemplateRows: "1fr",
							gap: "0px 10px",
							gridTemplateAreas: " 'aboutus partnership more'",
							justifyItems: "center",
							alignItems: "center",
							paddingTop: '100px',
							marginLeft: '20px'
						}}>
							<div style={{
								gridArea: "aboutus",
								width: "100%",
								height: "100%",
								gap: "10px 0px",
								display: "grid",
								gridTemplateRows: " 1fr 3fr",
								gridTemplateColumns: "1fr",
								gridTemplateAreas: "  'title' 'button'	",
								color: 'white',
								borderRight: "1px solid white",


							}}>
								<div style={{
									gridArea: "title",
									width: "100%",
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',

								}}>
									HAKKIMIZDA
								</div>
								<div style={{
									gridArea: "button",
								}}>
									<div style={{
										gridArea: "button",
										width: "100%",
										textAlign: "center",
										color: "white",
										cursor: "pointer",

									}}>
										Biz Kimiz
									</div>
									<div style={{
										gridArea: "button",
										width: "100%",
										textAlign: "center",
										color: "white",
										cursor: "pointer",

									}}>
										Kariyer
									</div>
									<div style={{
										gridArea: "button",
										width: "100%",
										textAlign: "center",
										color: "white",
										cursor: "pointer",

									}}>
										Ortaklıklar
									</div>
									<div style={{
										gridArea: "button",
										width: "100%",
										textAlign: "center",
										color: "white",
										cursor: "pointer",

									}}>
										Değerlerimiz
									</div>
								</div>

							</div>
							<div style={{
								gridArea: "partnership",
								width: "100%",
								gap: "10px 0px",
								display: "grid",
								gridTemplateRows: " 1fr 3fr",
								gridTemplateColumns: "1fr",
								gridTemplateAreas: "  'title' 'button'	",
								color: 'white',
								borderRight: "1px solid white",

							}}>
								<div style={{
									gridArea: "title",
									width: "100%",
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',

								}}>
									ORTAKLIK
								</div>
								<div style={{
									gridArea: "button",
								}}>
									<div style={{
										gridArea: "button",
										width: "100%",
										textAlign: "center",
										color: "white",
										cursor: "pointer",

									}}>
										Ortaklık Şartları
									</div>
									<div style={{
										gridArea: "button",
										width: "100%",
										textAlign: "center",
										color: "white",
										cursor: "pointer",

									}}>
										Gizlilik Kuralları
									</div>
									<div style={{
										gridArea: "button",
										width: "100%",
										textAlign: "center",
										color: "white",
										cursor: "pointer",

									}}>
										İletişim
									</div>
									<div style={{
										gridArea: "button",
										width: "100%",
										textAlign: "center",
										color: "white",
										cursor: "pointer",

									}}>
										Yardım
									</div>
								</div>
							</div>
							<div style={{
								gridArea: "more",
								width: "100%",
								gap: "10px 0px",
								display: "grid",
								gridTemplateRows: " 1fr 3fr",
								gridTemplateColumns: "1fr",
								gridTemplateAreas: "  'title' 'button'	",
								color: 'white',

							}}>
								<div style={{
									gridArea: "title",
									width: "100%",
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',

								}}>
									DAHA FAZLASI
								</div>
								<div style={{
									gridArea: "button",
								}}>
									<div style={{
										gridArea: "button",
										width: "100%",
										textAlign: "center",
										color: "white",
										cursor: "pointer",

									}}>
										Hediye Sistemi
									</div>
									<div style={{
										gridArea: "button",
										width: "100%",
										textAlign: "center",
										color: "white",
										cursor: "pointer",

									}}>
										Sipariş Kuralları
									</div>
									<div style={{
										gridArea: "button",
										width: "100%",
										textAlign: "center",
										color: "white",
										cursor: "pointer",

									}}>
										Bilgi Toplum Hizmeti
									</div>
									<div style={{
										gridArea: "button",
										width: "100%",
										textAlign: "center",
										color: "white",
										cursor: "pointer",

									}}>
										S.S.S
									</div>
								</div>
							</div>
						</div>
					</div>
					<div style={{ width: '100%', gridArea: 'secondary', borderTop: '1px solid white', borderBottom: '1px solid white', display: 'flex', justifyContent: 'space-around', fontSize: '16px', color: 'white', padding: '10px 150px' }}>
						<div style={{
							gridArea: "button",
							width: "100%",
							textAlign: "center",
							color: "white",
							cursor: "pointer",

						}}>GİZLİLİK POLİTİKASI</div>
						<div style={{
							gridArea: "button",
							width: "100%",
							textAlign: "center",
							color: "white",
							cursor: "pointer",

						}}>İÇERİK POLİTİKASI</div>
						<div style={{
							gridArea: "button",
							width: "100%",
							textAlign: "center",
							color: "white",
							cursor: "pointer",

						}}>ÇEREZ TERCİHLERİ</div>
						<div style={{
							gridArea: "button",
							width: "100%",
							textAlign: "center",
							color: "white",
							cursor: "pointer",

						}}>KULLANIM KOŞULLARI</div>

					</div>
				</div>
			</section>
		</Layout >
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

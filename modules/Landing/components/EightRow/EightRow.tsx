import React from 'react'
import Image from 'next/image'
import styles from './EightRow.module.css'
import { FormControl, FormLabel, FormHelperText, TextField, Button, InputAdornment, FormGroup } from '@mui/material'

const textFieldStyles = {
    width: '500px',
    height: '45px',
    backgroundColor: '#fffdedff',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    border: 'none',
    fontFamily: 'Work Sans',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#ff8c00',
    '&:focus': {
        outline: 'none',
    },
    '&::placeholder': {
        color: '#ff8c00',
        opacity: 1,
    },
    '&:-ms-input-placeholder': {
        color: '#ff8c00',
    },
    '&::-ms-input-placeholder': {
        color: '#ff8c00',
    },
    '@media (max-width: 768px)': {
        width: '100%',
    },
}

const buttonStyles = {
    height: '43px',
    borderRadius: '5px',
    backgroundColor: '#ff8c00',
    color: 'white',
    fontFamily: 'Work Sans',
    fontWeight: 'bold',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    '&:focus': {
        outline: 'none',
    },
    '@media (max-width: 768px)': {
        width: '100%',
    },
}

export const EightRow = () => {

    const handleClick = (link: string) => {
        window.open(link, "_blank")
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                Gelişmelerden haberdar olabilmek için bültene kayıt olun.
            </div>
            <div className={styles.input}>
                <form onSubmit={() => { }} id="demo">
                    <FormControl>
                        <FormGroup row>
                            <TextField
                                // sx={{ '--Input-decorator-childHeight': '45px' }}
                                placeholder="E-POSTA ADRESİNİZİ GİRİNİZ"
                                type="email"
                                required
                                sx={textFieldStyles}
                                size="small"
                                InputProps={{
                                    sx: { borderTopRightRadius: 0, borderBottomRightRadius: 0, }

                                }}

                            />
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                sx={buttonStyles}
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
            <div className={styles.socialmedia}>

                <div className={styles.socialmediaItem} onClick={() => handleClick('https://www.instagram.com/pickiesapp/')}>
                    <div className={styles.socialmediaIcon}>
                        <Image
                            src={"/images/Instagram.png"}
                            alt="Line1"
                            height={25}
                            width={25}
                        />
                    </div>

                    <div className={styles.socialmediaText}>@pickiesapp</div>
                </div>
                <div className={styles.socialmediaItem} onClick={() => handleClick('https://twitter.com/pickiesapp')}>
                    <div className={styles.socialmediaIcon}>
                        <Image
                            src={"/images/twitter.png"}
                            alt="Line1"
                            height={25}
                            width={30}
                        />
                    </div>
                    <div className={styles.socialmediaText}>@pickiesapp</div>
                </div>
                <div className={styles.socialmediaItem} onClick={() => handleClick('https://www.pickiesapp.com/')}>
                    <div className={styles.socialmediaIcon}>
                        <Image
                            src={"/images/website.png"}
                            alt="Line1"
                            height={25}
                            width={30}
                        />
                    </div>
                    <div className={styles.socialmediaText}>pickiesapp.com</div>
                </div>
            </div>
        </div >
    )
}

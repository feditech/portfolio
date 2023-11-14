import React from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {
    const { i18n } = useTranslation()
    return (
        i18n.language == 'en' ?
            <button
                className='bg-secondary  px-4 py-2 rounded-md'
                onClick={() => i18n.changeLanguage('ar')}
            >AR</button>
            :
            <button
                className='bg-secondary  px-4 py-2 rounded-md'
                onClick={() => i18n.changeLanguage('en')}
            >EN</button>
    )
}

export default LanguageSwitcher
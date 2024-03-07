"use client";
import { toggle_text } from '@/public/script/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { en } from '@/public/script/langs/en';
import { fr } from '@/public/script/langs/fr';

export default function Languages ({ children }) {

    const dispatch = useDispatch();
    const config = useSelector((state) => state.config);

    useEffect(() => {

        let data = en;
        if ( config.lang === 'en' ) data = en;
        if ( config.lang === 'fr' ) data = fr;

        dispatch(toggle_text(data));

    }, [config.lang]);

};

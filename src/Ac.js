import React, { useState } from "react";

import { motion } from "framer-motion";

export const Ac = () => {
  const [shown, setShown] = useState(true);

  const hide = () => {
    setShown(false);
  };

  return (
    <div>
      {shown && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.75 }}
          onTransitionEnd={hide}
          className="my-4 abscenter w-full text-center"
        >
          <h1 className="text-center">
            <span className="f1 text-2xl md:text-3xl text-pink-300">
              Pipiliin Kita Araw Araw
            </span>
          </h1>

          <p className="f2 text-xs md:text-md text-pink-100">
              Pipiliin Kita Araw Araw
            </p>
        </motion.div>
      )}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.75, duration: 1.75 }}
        className="ac bg-ac w-full text-xs text-justify"
      >
        Umaga na sa ating duyan 'Wag nang mawawala Umaga na sa ating duyan
        Magmamahal, oh, mahiwaga Matang magkakilala Sa unang pagtagpo Paano
        dahan-dahang Sinuyo ang puso? Kay tagal ko nang nag-iisa And'yan ka lang
        pala Mahiwaga Pipiliin ka sa araw-araw Mahiwaga Ang nadarama sa 'yo'y
        malinaw Higit pa sa ligaya Hatid sa damdamin Lahat naunawaan Sa lalim ng
        tingin Mahiwaga Pipiliin ka sa araw-araw Mahiwaga Ang nadarama sa 'yo'y
        malinaw Sa minsang pagbali ng hangin Hinila patungo sa akin Tanging
        ika'y iibiging wagas at buo Payapa sa yakap ng iyong hiwaga Payapa sa
        yakap ng iyong... Mahiwaga Pipiliin ka sa araw-araw Mahiwaga Ang
        nadarama sa 'yo'y malinaw Mahiwaga 'Wag nang mawala araw-araw Mahiwaga
        Pipiliin ka araw-araw Umaga na sa ating duyan 'Wag nang mawawala Umaga
        na sa ating duyan Magmamahal, oh, mahiwaga Matang magkakilala Sa unang
        pagtagpo Paano dahan-dahang Sinuyo ang puso? Kay tagal ko nang nag-iisa
        And'yan ka lang pala Mahiwaga Pipiliin ka sa araw-araw Mahiwaga Ang
        nadarama sa 'yo'y malinaw Higit pa sa ligaya Hatid sa damdamin Lahat
        naunawaan Sa lalim ng tingin Mahiwaga Pipiliin ka sa araw-araw Mahiwaga
        Ang nadarama sa 'yo'y malinaw Sa minsang pagbali ng hangin Hinila
        patungo sa akin Tanging ika'y iibiging wagas at buo Payapa sa yakap ng
        iyong hiwaga Payapa sa yakap ng iyong... Mahiwaga Pipiliin ka sa
        araw-araw Mahiwaga Ang nadarama sa 'yo'y malinaw Mahiwaga 'Wag nang
        mawala araw-araw Mahiwaga Pipiliin ka araw-arawUmaga na sa ating duyan
        'Wag nang mawawala Umaga na sa ating duyan Magmamahal, oh, mahiwaga
        Matang magkakilala Sa unang pagtagpo Paano dahan-dahang Sinuyo ang puso?
        Kay tagal ko nang nag-iisa And'yan ka lang pala Mahiwaga Pipiliin ka sa
        araw-araw Mahiwaga Ang nadarama sa 'yo'y malinaw Higit pa sa ligaya
        Hatid sa damdamin Lahat naunawaan Sa lalim ng tingin Mahiwaga Pipiliin
        ka sa araw-araw Mahiwaga Ang nadarama sa 'yo'y malinaw Sa minsang
        pagbali ng hangin Hinila patungo sa akin Tanging ika'y iibiging wagas at
        buo Payapa sa yakap ng iyong hiwaga Payapa sa yakap ng iyong... Mahiwaga
        Pipiliin ka sa araw-araw Mahiwaga Ang nadarama sa 'yo'y malinaw Mahiwaga
        'Wag nang mawala araw-araw Mahiwaga Pipiliin ka araw-arawUmaga na sa
        ating duyan 'Wag nang mawawala Umaga na sa ating duyan Magmamahal, oh,
        mahiwaga Matang magkakilala Sa unang pagtagpo Paano dahan-dahang Sinuyo
        ang puso? Kay tagal ko nang nag-iisa And'yan ka lang pala Mahiwaga
        Pipiliin ka sa araw-araw Mahiwaga Ang nadarama sa 'yo'y malinaw Higit pa
        sa ligaya Hatid sa damdamin Lahat naunawaan Sa lalim ng tingin Mahiwaga
        Pipiliin ka sa araw-araw Mahiwaga Ang nadarama sa 'yo'y malinaw Sa
        minsang pagbali ng hangin Hinila patungo sa akin Tanging ika'y iibiging
        wagas at buo Payapa sa yakap ng iyong hiwaga Payapa sa yakap ng iyong...
        Mahiwaga Pipiliin ka sa araw-araw Mahiwaga Ang nadarama sa 'yo'y malinaw
        Mahiwaga 'Wag nang mawala araw-araw Mahiwaga Pipiliin ka araw-arawUmaga
        na sa ating duyan 'Wag nang mawawala Umaga na sa ating duyan Magmamahal,
        oh, mahiwaga Matang magkakilala Sa unang pagtagpo Paano dahan-dahang
        Sinuyo ang puso? Kay tagal ko nang nag-iisa And'yan ka lang pala
        Mahiwaga Pipiliin ka sa araw-araw Mahiwaga Ang nadarama sa 'yo'y malinaw
        Higit pa sa ligaya Hatid sa damdamin Lahat naunawaan Sa lalim ng tingin
        Mahiwaga Pipiliin ka sa araw-araw Mahiwaga Ang nadarama sa 'yo'y malinaw
        Sa minsang pagbali ng hangin Hinila patungo sa akin Tanging ika'y
        iibiging wagas at buo Payapa sa yakap ng iyong hiwaga Payapa sa yakap ng
        iyong... Mahiwaga Pipiliin ka sa araw-araw Mahiwaga Ang nadarama sa
        'yo'y malinaw Mahiwaga 'Wag nang mawala araw-araw Mahiwaga Pipiliin ka
        araw-arawUmaga na sa ating duyan 'Wag nang mawawala Umaga na sa ating
        duyan Magmamahal, oh, mahiwaga Matang magkakilala Sa unang pagtagpo
        Paano dahan-dahang Sinuyo ang puso? Kay tagal ko nang nag-iisa And'yan
        ka lang pala Mahiwaga Pipiliin ka sa araw-araw Mahiwaga Ang nadarama sa
        'yo'y malinaw Higit pa sa ligaya Hatid sa damdamin Lahat naunawaan Sa
        lalim ng tingin Mahiwaga Pipiliin ka sa araw-araw Mahiwaga Ang nadarama
        sa 'yo'y malinaw Sa minsang pagbali ng hangin Hinila patungo sa akin
        Tanging ika'y iibiging wagas at buo Payapa sa yakap ng iyong hiwaga
        Payapa sa yakap ng iyong... Mahiwaga Pipiliin ka sa araw-araw Mahiwaga
        Ang nadarama sa 'yo'y malinaw Mahiwaga 'Wag nang mawala araw-araw
        Mahiwaga Pipiliin ka araw-arawUmaga na sa ating duyan 'Wag nang mawawala
        Umaga na sa ating duyan Magmamahal, oh, mahiwaga Matang magkakilala Sa
        unang pagtagpo Paano dahan-dahang Sinuyo ang puso? Kay tagal ko nang
        nag-iisa And'yan ka lang pala Mahiwaga Pipiliin ka sa araw-araw Mahiwaga
        Ang nadarama sa 'yo'y malinaw Higit pa sa ligaya Hatid sa damdamin Lahat
        naunawaan Sa lalim ng tingin Mahiwaga Pipiliin ka sa araw-araw Mahiwaga
        Ang nadarama sa 'yo'y malinaw Sa minsang pagbali ng hangin Hinila
        patungo sa akin Tanging ika'y iibiging wagas at buo Payapa sa yakap ng
        iyong hiwaga Payapa sa yakap ng iyong... Mahiwaga Pipiliin ka sa
        araw-araw Mahiwaga Ang nadarama sa 'yo'y malinaw Mahiwaga 'Wag nang
        mawala araw-araw Mahiwaga Pipiliin ka araw-arawUmaga na sa ating duyan
        'Wag nang mawawala Umaga na sa ating duyan Magmamahal, oh, mahiwaga
        Matang magkakilala Sa unang pagtagpo Paano dahan-dahang Sinuyo ang puso?
        Kay tagal ko nang nag-iisa And'yan ka lang pala Mahiwaga Pipiliin ka sa
        araw-araw Mahiwaga Ang nadarama sa 'yo'y malinaw Higit pa sa ligaya
        Hatid sa damdamin Lahat naunawaan Sa lalim ng tingin Mahiwaga Pipiliin
        ka sa araw-araw Mahiwaga Ang nadarama sa 'yo'y malinaw Sa minsang
        pagbali ng hangin Hinila patungo sa akin Tanging ika'y iibiging wagas at
        buo Payapa sa yakap ng iyong hiwaga Payapa sa yakap ng iyong... Mahiwaga
        Pipiliin ka sa araw-araw Mahiwaga Ang nadarama sa 'yo'y malinaw Mahiwaga
        'Wag nang mawala araw-araw Mahiwaga Pipiliin ka araw-arawUmaga na sa
        ating duyan 'Wag nang mawawala Umaga na sa ating duyan Magmamahal, oh,
        mahiwaga Matang magkakilala Sa unang pagtagpo Paano dahan-dahang Sinuyo
        ang puso? Kay tagal ko nang nag-iisa And'yan ka lang pala Mahiwaga
        Pipiliin ka sa araw-araw Mahiwaga Ang nadarama sa 'yo'y malinaw Higit pa
        sa ligaya Hatid sa damdamin Lahat naunawaan Sa lalim ng tingin Mahiwaga
        Pipiliin ka sa araw-araw Mahiwaga Ang nadarama sa 'yo'y malinaw Sa
        minsang pagbali ng hangin Hinila patungo sa akin Tanging ika'y iibiging
        wagas at buo Payapa sa yakap ng iyong hiwaga Payapa sa yakap ng iyong...
        Mahiwaga Pipiliin ka sa araw-araw Mahiwaga Ang nadarama sa 'yo'y malinaw
        Mahiwaga 'Wag nang mawala araw-araw Mahiwaga Pipiliin ka araw-arawUmaga
        na sa ating duyan 'Wag nang mawawala Umaga na sa ating duyan Magmamahal,
        oh, mahiwaga Matang magkakilala Sa unang pagtagpo Paano dahan-dahang
        Sinuyo ang puso? Kay tagal ko nang nag-iisa And'yan ka lang pala
        Mahiwaga Pipiliin ka sa araw-araw Mahiwaga Ang nadarama sa 'yo'y malinaw
        Higit pa sa ligaya Hatid sa damdamin Lahat naunawaan Sa lalim ng tingin
        Mahiwaga Pipiliin ka sa araw-araw Mahiwaga Ang nadarama sa 'yo'y malinaw
        Sa minsang pagbali ng hangin Hinila patungo sa akin Tanging ika'y
        iibiging wagas at buo Payapa sa yakap ng iyong hiwaga Payapa sa yakap ng
        iyong... Mahiwaga Pipiliin ka sa araw-araw Mahiwaga Ang nadarama sa
        'yo'y malinaw Mahiwaga 'Wag nang mawala araw-araw Mahiwaga Pipiliin ka
        araw-arawUmaga na sa ating duyan 'Wag nang mawawala Umaga na sa ating
        duyan Magmamahal, oh, mahiwaga Matang magkakilala Sa unang pagtagpo
        Paano dahan-dahang Sinuyo ang puso? Kay tagal ko nang nag-iisa And'yan
        ka lang pala Mahiwaga Pipiliin ka sa araw-araw Mahiwaga Ang nadarama sa
        'yo'y malinaw Higit pa sa ligaya Hatid sa damdamin Lahat naunawaan Sa
        lalim ng tingin Mahiwaga Pipiliin ka sa araw-araw Mahiwaga Ang nadarama
        sa 'yo'y malinaw Sa minsang pagbali ng hangin Hinila patungo sa akin
        Tanging ika'y iibiging wagas at buo Payapa sa yakap ng iyong hiwaga
        Payapa sa yakap ng iyong... Mahiwaga Pipiliin ka sa araw-araw Mahiwaga
        Ang nadarama sa 'yo'y malinaw Mahiwaga 'Wag nang mawala araw-araw
        Mahiwaga Pipiliin ka araw-arawUmaga na sa ating duyan 'Wag nang mawawala
        Umaga na sa ating duyan Magmamahal, oh, mahiwaga Matang magkakilala Sa
        unang pagtagpo Paano dahan-dahang Sinuyo ang puso? Kay tagal ko nang
        nag-iisa And'yan ka lang pala Mahiwaga Pipiliin ka sa araw-araw Mahiwaga
        Ang nadarama sa 'yo'y malinaw Higit pa sa ligaya Hatid sa damdamin Lahat
        naunawaan Sa lalim ng tingin Mahiwaga Pipiliin ka sa araw-araw Mahiwaga
        Ang nadarama sa 'yo'y malinaw Sa minsang pagbali ng hangin Hinila
        patungo sa akin Tanging ika'y iibiging wagas at buo Payapa sa yakap ng
        iyong hiwaga Payapa sa yakap ng iyong... Mahiwaga Pipiliin ka sa
        araw-araw Mahiwaga Ang nadarama sa 'yo'y malinaw Mahiwaga 'Wag nang
        mawala araw-araw Mahiwaga Pipiliin ka araw-arawUmaga na sa ating duyan
        'Wag nang mawawala Umaga na sa ating duyan Magmamahal, oh, mahiwaga
        Matang magkakilala Sa unang pagtagpo Paano dahan-dahang Sinuyo ang puso?
        Kay tagal ko nang nag-iisa And'yan ka lang pala Mahiwaga Pipiliin ka sa
        araw-araw Mahiwaga Ang nadarama sa 'yo'y malinaw Higit pa sa ligaya
        Hatid sa damdamin Lahat naunawaan Sa lalim ng tingin Mahiwaga Pipiliin
        ka sa araw-araw Mahiwaga Ang nadarama sa 'yo'y malinaw Sa minsang
        pagbali ng hangin Hinila patungo sa akin Tanging ika'y iibiging wagas at
        buo Payapa sa yakap ng iyong hiwaga Payapa sa yakap ng iyong... Mahiwaga
        Pipiliin ka sa araw-araw Mahiwaga Ang nadarama sa 'yo'y malinaw Mahiwaga
        'Wag nang mawala araw-araw Mahiwaga Pipiliin ka araw-araw
      </motion.p>
    </div>
  );
};

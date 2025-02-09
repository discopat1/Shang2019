const mongoose = require("mongoose");
const db = require("../models");

// This file empties the collection and inserts the bands below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/shangrila"
);

const bandSeed = [
    {


        "stage": "Main",
        "band": "Nahko & Medicine for the People",
        "time": "11:00pm",
        "day": "Friday",
        "image": "http://nahko.com/wp-content/uploads/2017/09/nahko-slider-with-title.jpg",
        "url": "http://nahko.com/home/",
        "bio": "Nahko, an Oregon-native born a mix of Puerto Rican, Native American, and Filipino bloodlines considers himself a citizen in service to the planet. Disillusioned by the world around him and inspired by vagabond, Americana musicians and storytellers like Conor Oberst and Bob Dylan, Nahko left home as a teenager in search of adventure and self discovery. Armed with stories, a guitar, and a fierce set of ideals, he set out to bridge the cultural gaps dividing his own psyche. He began producing a public, musical journal of his journey toward personal, spiritual, and social healing, and thus Medicine for the People was born. Recently, Nahko discussed his successes, his philosophies, his music, and his life with Huffington Post, who called Nahko’s music “beautiful and stirring.” Nahko describes his music as a mix of hip-hop and folk rock with a world message."
    },
    {

        "stage": "Main",
        "band": "Wookiefoot",
        "time": "11:00pm",
        "day": "Saturday",
        "image": "https://shangrilafest.com/wp-content/uploads/2019/02/Wookiefoot-SL-2018-Slider--1200x500.jpg",
        "url": "http://www.wookiefoot.com",
        "bio": "Wookiefoot is a band, a 501C3 Non-Profit Charity Organization, a circus, a philosophy, and a community of globe trekking bliss junkies and believers that are the fuel to keep this Tribadelic Spaceship going! Their charity organization (with the support of their community) has donated over $500,000 to third world relief efforts. Wookiefoot’s live sets are an always inspiring and entertaining barrage of sonic and visual stimulation. The fast-paced circus-like set has been called “Short Attention Span Musical Theater”. These live performances are a one of a kind experience that mixes Reggae, World Beat, Hip Hop, Irish, Funk, Folk, Rock & more with a large band featuring everything from a vintage Hammond Organ to Bag Pipes! Combine that with a mind-blowing stage show that may include anything (such as a light show, projection, costumes, fire, dancers, aerialists, magic, clowns, puppets, etc)… and you better buckle up!"
    },
    {

        "stage": "Main",
        "band": "Dirtwire",
        "time": "1:00am",
        "day": "Friday",
        "image": "https://selloutapp.storage.googleapis.com/image/event/dirtwire.jpeg",
        "url": "http://www.dirtwire.com",
        "bio": "Dirtwire sits on the back porch of Americana’s future, conjuring up a whirlwind of sound using traditional instrumentation, world percussion, soundscapes, and electronic beats. Comprised of David Satori (Beats Antique), Evan Fraser (The Dogon Lights; Bolo), and Mark Reveley (Jed and Lucia), each performance brings us all to a mysterious crossroads of beats, blues, African, Asian, and South American sounds. The result is a rebirth of Americana and a post-millennial psychedelic journey to down home goodness."
    },
    {

        "stage": "Main",
        "band": "Satsang",
        "time": "9:00pm",
        "day": "Saturday",
        "image": "https://image-ticketfly.imgix.net/00/02/73/25/37-og.JPG?w=500&h=333",
        "url": "http://www.satsangmovement.com/about",
        "bio": "Satsang is a power trio creating a unique blend of soul, folk-rock, and hip-hop.  Satsang delivers lyrics that come from and are rooted in change, growth, awareness, and imperfection. "
    },
    {

        "stage": "Main",
        "band": "The Movement",
        "time": "7:00pm",
        "day": "Saturday",
        "image": "http://www.northwestmilitary.com/calendar/we-recommend/2014/12/The-Movement-reggae-band-at-Jazzbones-Tacoma-December-7/uploads/articles/25169-banner-The-movement-reggae-band.jpg",
        "url": "https://www.themovementvibe.com/",
        "bio": "Formed in 2003 by a trio of Sublime and Pixies fans, The Movement’s debut album, ON YOUR FEET (2004), has been heralded as one of the “top 10 reggae rock albums of all time,” and the band has toured with legends from 311 to Parliament, Slightly Stoopid to Dirty Heads, Wu-Tang Clan, Steel Pulse, Stick Figure, Pepper, and more."
    },
    {

        "stage": "Side",
        "band": "YAIMA",
        "time": "6:00pm",
        "day": "Saturday",
        "image": "https://shangrilafest.com/wp-content/uploads/2018/03/SL18_Yaima.jpg",
        "url": "https://www.yaimamusic.com/",
        "bio": "YAIMA’s music is interwoven with intention and acknowledgment for the elementals. As the earth transmutes through fire, the winds move the water, the water falls and replenishes the earth- the cycles of gratitude and reciprocity is what weaves these harmonies and deeply pulsing rhythms into a unique and balanced sensational journey."

    },

    {

        "stage": "Side",
        "band": "Tropidelic",
        "time": "8:00pm",
        "day": "Saturday",
        "image": "https://shangrilafest.com/wp-content/uploads/2019/02/Tropidelic-sized.jpg",
        "url": "http://tropidelic.com/",
        "bio": "These seasoned road dogs can be found spreading their soulful sound across the country in both intimate venues and music festivals, having shared the stage with and supported such acts as 311, Slightly Stoopid, The Dirty Heads, Pepper and The Wailers. "
    },

    {

        "stage": "Side",
        "band": "Ayla Nero",
        "time": "7:45",
        "day": "Friday",
        "image": "https://shangrilafest.com/wp-content/uploads/2019/02/ayla-Sized.jpg",
        "url": "http://aylanereo.com/",
        "bio": "Ayla Nereo is a voice for the planet, a beacon of light, a modern bard of beauty singing directly from her soul. With lyrical poetry splashing like dazzling paint across a canvas of sound, she builds layer upon layer of vocal melodies into majestic loop-pedal harmonies, weaving syncopated threads of guitar, kalimba, piano, and percussion into her live performances. "
    },

    {

        "stage": "Harmonium",
        "band": "Roots Of Creation",
        "time": "8:00pm",
        "day": "Saturday",
        "image": "https://shangrilafest.com/wp-content/uploads/2019/02/Roots-of-Creation-sized.jpg",
        "url": "https://www.rootsofcreation.com/",
        "bio": "Whether on the festival circuit, performing at jam and reggae-rock favorites like Camp Bisco, Gathering of The Vibes, California Roots, Jungle Jam and Closer to the Sun, or sharing the stage at sold out shows with some of their diverse influences including Slightly Stoopid, The Wailers, and Michael Franti, reggae/rock/dubtronica band Roots of Creation (RoC) offers up a high-energy, infectious live music experience. "
    },

    {

        "stage": "Harmonium",
        "band": "The Late Ones",
        "time": "7:00pm",
        "day": "Friday",
        "image": "https://shangrilafest.com/wp-content/uploads/2019/02/the-lateones-sized.jpg",
        "url": "http://www.thelateones.com/",
        "bio": "  Based out of Laie, Hawaii, brothers Tui Avei (Lead vocals), and Tau Avei (Vocals), along with cousin Josh Brunson (Vocals) are the voices. Built on a roots reggae foundation with influences from various genres like Hip-hop, R&B, and jazz, The Late Ones’ unique blend of style, and harmony shapes a youthful, yet old school reggae vibe."
    },

    {

        "stage": "Harmonium",
        "band": "Indubious",
        "time": "8:00pm",
        "day": "Saturday",
        "image": "https://shangrilafest.com/wp-content/uploads/2019/03/indubious-sized2.jpg",
        "url": "https://www.indubiousmusic.com/",
        "bio": "The story of Indubious is not for the faint of heart. Like a phoenix rising from the ashes, Indubious was forged in the fires of pain and destruction. Evton and Skip, brothers and bandmates born with Cystic Fibrosis and convinced by doctors of their impending death from an early age, have emerged as a powerful force for change and the future of conscious music. Their only choice has always been mind over matter, and time has proven that their unbending positive outlook, combined with an inspiring message of love and hope, has not only helped them overcome personal hardship, but catapulted their music onto the world stage with an unstoppable momentum."
    },
    {
        "stage": "Harmonium",
        "band": "Jonny Wayne",
        "time": "8:00pm",
        "day": "Fri",
        "image": "https://shangrilafest.com/wp-content/uploads/2019/02/Jonny-wayne-sized.jpg",
        "url": "https://www.jonwayneandthepain.com/",
        "bio": "Jonny Wayne, lead singer of Jon Wayne and The Pain spent the last year in Asia writing and recording new music. This year brings us his new project to Shang taking things back to the acoustic and reggae roots the caught on in the beginning. This should be a crowd favorite for the old school JWP fans as well as the new family. Cheers!"
    },

    {

        "stage": "Side",
        "band": "Tubby Love and Amber Lily",
        "time": "6:00pm",
        "day": "Saturday",
        "image": "https://shangrilafest.com/wp-content/uploads/2019/02/tubby-love-amber-lily-new-sized.jpg",
        "url": "https://www.facebook.com/TU33YLOVE",
        "bio": "From the garden to the globe,Tubby Love is gathering the tribe. Born David Andrew Terrett, Tubby’s physical, spiritual, and musical transformation has been a testimony to the power of human evolution. Music has been the catalyst for deepening his connection to life and also a bridge for sharing his journey with others. Calling the island of Kauai home has set forth a Roots Family movement involving regenerative land and energy practices connecting communities inter-island and worldwide."
    },



    {

        "stage": "Harmonium",
        "band": "Linear Symmetry",
        "time": "4:00pm",
        "day": "Saturday",
        "image": "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/36329136_1026040334229115_5382197580757204992_o.jpg?_nc_cat=104&_nc_ht=scontent-dfw5-1.xx&oh=1dd2b1ee91afa99f99377783a37e2bfc&oe=5D17F51C",
        "url": "http://www.linearsymmetry.com",
        "bio": "A unique trio hailing from the heart of the Midwest, Linear Symmetry combines forces to produce electrifying organic dance music. From the first note, Huma immediately captivates audiences with her soaring vocals, stunning violin and dazzling energy. "
    },

    {

        "stage": "Side",
        "band": "TreeHouse",
        "time": "4:00pm",
        "day": "Saturday",
        "image": "https://d3jjg4nf4bbybe.cloudfront.net/u/251755/9232821ab5a635397ddcd42fbd3921d3eb65923e/large/deacom101718-11.jpg",
        "url": "https://www.treehousetheband.com/",
        "bio": "TreeHouse! songs resonate in your soul with lyrics of rising above adversity, the power of gratitude, and the importance of unity. For every setback, there's a step up waiting for you if you keep your focus. For every day, there's a blessing to count and for every event, we must recognize we are a part of it all. It's this kind of message that makes the most recent studio album, Lifted, their strongest release to date."
    },
    {

        "stage": "Side",
        "band": "Spectacle",
        "time": "7:00pm",
        "day": "Saturday",
        "image": "https://shangrilafest.com/wp-content/uploads/2019/02/Spectacle-sized.jpg",
        "url": "https://open.spotify.com/artist/2bbdIwhUzDSIowbxfTbj2O#_=_",
        "bio": "In the winter of 2015, a striking new voice formed in the heart of Denver’s electronic music scene. Spectacle’s orchestral instrumentation (violin, percussion, guitar) quickly made the trio stand out amongst the crowd; each performance being an experience that is refreshingly original. Hard hitting drops, alongside afro-cuban percussion make for an irresistible groove and a heady tropical soundscape. Beautiful soaring violin melodies, and deep rhythmic bass synth lines drive each musical passage through every member of the audience. Band members Michael Mahan, Jessica Borth, and Rob Brandon work in unity gripping the crowd for a show that is both mesmerizing and captivating from start to finish. Spectacle brings their audience through an innovative and dynamic journey show after show after show."
    },



    {

        "stage": "Main",
        "band": "Heatbox",
        "time": "4:00pm",
        "day": "Saturday",
        "image": "https://shangrilafest.com/wp-content/uploads/2018/07/sl18_0013_Heatbox.jpg",
        "url": "https://www.heatboxllc.com/",
        "bio": "Heatbox, aka The One Man Entertainment System, is a Minneapolis based funky beatboxing loop artist, video game show host, voice over actor, and computer programmer."
    },

    {

        "stage": "Side",
        "band": "Useful Jenkins",
        "time": "6:00pm",
        "day": "Friday",
        "image": "https://shangrilafest.com/wp-content/uploads/2018/03/SL18_UsefulJenkins.jpg",
        "url": "http://www.usefuljenkins.com/",
        "bio": "Useful Jenkins is a contemporary acoustic band with a bluegrass foundation.  They use their grass-roots to readily tap into other genres such as folk, funk, rock, and hip hop.  Their music generates emotion and sends a message to a wide range of listeners, giving them an eclectic group of followers from all walks of life.  Useful Jenkins thrives on energy; they flourish in the moment and have an unmatched resonance with the crowd.  The band is made up of an acoustic guitar, mandolin, violin, cello, and electric bass.  3-part vocal harmonies accompany the wall of stringed instruments, leaving listeners with a strong, clean, and unique sound."
    },
    {

        "stage": "Harmonium",
        "band": "Kind Country",
        "time": "4:00pm",
        "day": "Friday",
        "image": "https://shangrilafest.com/wp-content/uploads/2018/07/sl18_0010_kindcountry.jpg",
        "url": "https://www.kindcountryband.com/",
        "bio": "Kind music for kind people. Kind Country is a Minneapolis based band that plays American standards as well as their own brand of Cosmic American music. Since their formation in 2012, the band has focused on creating live performances with high levels of improvisation and energy gathering with a goal of creating a moment of musical bliss that can be shared by audience members and band alike."
    },
    {

        "stage": "Side",
        "band": "Smokin' Joe",
        "time": "6:00pm",
        "day": "Friday",
        "image": "https://shangrilafest.com/wp-content/uploads/2019/02/Smokin-Joe-sized.jpg",
        "url": "https://www.reverbnation.com/smokinjoeiowa",
        "bio": "Smokin’ Joe is a Minneapolis based alt-grass supergroup fronted by Joe Scarpellino (of Dead Larry). Joe hosts a rotating cast of Midwest talent featuring members of Kind Country, Useful Jenkins, Space Monkey Mafia, and SisterTree, just to name a few. The genre is a mix of bluegrass and 90s alternative rock, with elements of folk, pop, reggae, blues, and funk."
    },
    {

        "stage": "Main",
        "band": "Mae Simpson",
        "time": "9:00pm",
        "day": "Friday",
        "image": "https://shangrilafest.com/wp-content/uploads/2018/07/sl18_0009_mae_simpson.jpg",
        "url": "https://maesimpsonmusic.com/",
        "bio": "Mae Simpson is a singer/ songwriter born in Beaufort South Carolina. From a very early age, she would find herself singing songs that she had never heard, because they were hers. Throughout the years, she has found love in the music that she writes, with passion, soul, and a rawness reflected with each lyric. Today she works with talented hand picked musicians in the Twin cities, hoping to bring soul and female power back to the local music scene."
    },
    {

        "stage": "Harmonium",
        "band": "Gypse Freq Circus",
        "time": "3:00pm",
        "day": "Saturday",
        "image": "https://shangrilafest.com/wp-content/uploads/2019/02/Gypse-Freq-Circus-sized.jpg",
        "url": "https://gypsefreqcircus.com/",
        "bio": "We are Gypse Freq Circus and we think music is the common thread that holds all humans together. Taking our name from the word gypsy, meaning a nomadic or free-spirited person, we are a live EDM band seeking to incorporate all genres of music and performance art to create a unique experience for the observer."
    },
    {

        "stage": "Side",
        "band": "Cosmic Serenity",
        "time": "7:30pm",
        "day": "Saturday",
        "image": "https://shangrilafest.com/wp-content/uploads/2018/03/SL18_CosmicSerenity.jpg",
        "url": "https://www.facebook.com/CosmicSerenityBand/",
        "bio": "With a side note of comedy, and eccentric yet eclectic style of fashion, and a folksy sound and gypsy vibe that amps up a crowd and keeps you moving your head, tapping your feet… or just get up and lay the boogie down!"
    },
    {

        "stage": "Harmonium",
        "band": "OK2Change",
        "time": "5:00pm",
        "day": "Saturday",
        "image": "https://shangrilafest.com/wp-content/uploads/2018/07/sl18_0007_oktochange.jpg",
        "url": "http://www.ok2change.com/",
        "bio": "Jay Lara and Imani Avanti met in 2009 working on a fundraising campaign for human rights. Born and raised in the city of San Diego, Imani has been singing, dancing, and acting since high school. Jay, also from Southern California, picked up guitar and in 3 months was writing and playing songs. They wrote music and played shows together as Weekly Chaos for 7 years around San Diego but kept running into setbacks as they tried to pursue music professionally. An opportunity arose to move to Hawaii and make music full-time. Immediately, Jay and Imani both quit their jobs to pursue their ultimate dream and changed their band name to Ok2Change in 2016. On a musical mission to bring laughter and light to others, just as music has brought to them, Ok2Change strives to be the change they want to see."
    },
    {

        "stage": "Side",
        "band": "Dacota Muckey",
        "time": "5:30pm",
        "day": "Saturday",
        "image": "https://shangrilafest.com/wp-content/uploads/2019/03/DacotaMuckey.jpg",
        "url": "https://www.dacotamuckey.com/",
        "bio": "Dacota Muckey is a young, all-in-one kind of artist. He has been said to burn every bit of himself up on stage. His passion and desire to move forward with his music is evident both on stage and off. Dacota is a full time musician in his early twenties and his music has taken him to music festivals, bars, colleges and more all over the midwest and especially in his home state of Indiana. Playing all of these live shows and recording several full length albums of original material both with his band and solo have brought him extensive recognition over a short time as a musician with a pure passion to pour his entire life and all he has into his craft. His music is a new-age folk, rock, jam band style and his use of a loop pedal creates a seemingly full band."
    },
    {

        "stage": "Harmonium",
        "band": "Illusion Valley",
        "time": "3:30pm",
        "day": "Saturday",
        "image": "https://shangrilafest.com/wp-content/uploads/2019/03/Illusion-Valley.jpg",
        "url": "https://www.facebook.com/IllusionValleyBand/",
        "bio": "Illusion Valley writes thought provoking songs – sounds like folk meets indie rock. Vox, acoustic & electric guitar, bass, drums. Dynamic, hypnotic, chill."
    },

    {

        "stage": "Harmonium",
        "band": "New Reb",
        "time": "5:30pm",
        "day": "Friday",
        "image": "https://shangrilafest.com/wp-content/uploads/2018/07/newreb.jpg",
        "url": "http://www.newreb.com/",
        "bio": "New Reb is not just music… it’s a movement of people who want to better themselves for the sake of the planet, the universe. A movement to help people gain consciousness, and awareness of whats going on around them. A movement that promotes positivity and the realization that we are all mirrors, and that we all reflect upon one another."
    },

    {

        "stage": "Harmonium",
        "band": "Earth to Clark",
        "time": "4:30pm",
        "day": "Friday",
        "image": "https://shangrilafest.com/wp-content/uploads/2019/03/Earth-to-clark.jpg",
        "url": "https://www.earthtoclark.com/",
        "bio": "Earth to Clark seeks to remedy conflict by promoting peace and spreading messages of love and unity, particularly in places and spaces that need it most. What began as Gasser playing music and writing songs has evolved into a vision shared by all five current band members. The band formed organically over time, beginning with Gasser and former member Gregory Boyer in 2014. Collaboration with drummer Mark Atkinson and vocalist Ariana Hartgraves came next. Followed by Zak Radewan on percussion/keys, and finally Eric Timmcke on bass."
    },

    {

        "stage": "Side",
        "band": "Spare Change Trio",
        "time": "2:00pm",
        "day": "Friday",
        "image": "https://shangrilafest.com/wp-content/uploads/2018/07/sparechangetrio.jpg",
        "url": "http://www.sparechangetrio.com/",
        "bio": "This Milwaukee-based group, known largely for their eclectic live performances that incorporate the Australian didgeridoo into flowing soundscapes of reggae, funk, and jazz-fusion, consistently leave audiences wanting more. Deeply rooted in the positive message of reggae music, the band has grown to realize their calling: to spread peace, love, and harmony… while laying down an infectious groove."
    },


    {

        "stage": "Side",
        "band": "SisterTree",
        "time": "1:00pm",
        "day": "Saturday",
        "image": "https://shangrilafest.com/wp-content/uploads/2018/07/sl18_0003_sistertree.jpg",
        "url": "https://sistertreemusic.com/",
        "bio": "Picture a night of tunes and friendships new and old, seeking the alchemy of fulfillment in the glow of comrades circled in song. Twists and turns of phrase and plot brought Dee and Kerri together in just such a setting. Coiling cables, hoisting speakers, and buckling shoes and giving their all, they have come a long way from whiffling sound effects and harmonies in studio with local singer-songwriter Shawn McBurnie and his MN Arts Board grant project titled “Fearsome Critters,” where they re-imagined the tall tales of river workers, loggers, mill workers and miners as fodder for song. Where that ensemble brought new breath and strains to yarns that had grown little-known since they were first spun by our forebears, SisterTree has come to animate and deluge with sound and solace the worker, the protector, the wearied parent, the lonesome soul, the rowdy friend, and the kindred spirit. In their musing of post-mythic Northwoods revivalism, Kerri and Dee found magic in the spontaneous harmony line–and together they conjure something new."
    },

    {

        "stage": "Harmonium",
        "band": "Christina Holmes",
        "time": "2:30pm",
        "day": "Friday",
        "image": "https://shangrilafest.com/wp-content/uploads/2019/03/Christina-Holmes.jpg",
        "url": "http://www.sparechangetrio.com/",
        "bio": "When Christina Holmes sings, walls, barriers, and boundaries disappear.In the classic troubadour tradition, the New Jersey-born and Rhode Island-based songstress shares a piece of herself in every composition, welcoming listeners closer. Finding a sweet spot in the middle of acoustic, folk, reggae, rock, and pop music, she represents the same values and vision on stage and off."
    },
    {

        "stage": "Om Dome",
        "band": "Chase Ingraham",
        "time": "2:30pm",
        "day": "Friday",
        "image": "https://static.wixstatic.com/media/38b2fc_013ec19f483e4c74a74b4c2c2c2c5f2c~mv2_d_1221_1221_s_2.jpg/v1/fill/w_393,h_264,al_c,q_80,usm_0.66_1.00_0.01/38b2fc_013ec19f483e4c74a74b4c2c2c2c5f2c~mv2_d_1221_1221_s_2.webp",
        "url": "https://www.facebook.com/chaseingrahammusic/",
        "bio": "I’m 16 year old percussive fingerstyle guitarist from Minneapolis, MN - currently based out of Northfield, MN. Active hug lover, festival goer, musical medicine maker. I have music released on iTunes, Spotify, Amazon, Google Play, and all other major outlets! I am the Vice President of the Northfield Union of Youth, the longest standing youth-made, youth-ran center in the country, fundraising through music which has always been part of the culture for the kids there. "
    },
    {

        "stage": "Om Dome",
        "band": "Cas Haley",
        "time": "6:30pm",
        "day": "Friday",
        "image": "https://static.wixstatic.com/media/38b2fc_e26f7888b6ce4fd3bbb9bedee5eb4ae0~mv2.jpg/v1/fill/w_393,h_264,al_c,q_80,usm_0.66_1.00_0.01/38b2fc_e26f7888b6ce4fd3bbb9bedee5eb4ae0~mv2.webp",
        "url": "https://www.facebook.com/cashaleymusic/",
        "bio": " Texas Native, Cas Haley is a soulful -singer/songwriter /producer with an eclectic southern FLIPPED bluesy surf-roots sound."
    },
    {

        "stage": "Om Dome",
        "band": "Riconekt",
        "time": "7:30pm",
        "day": "Friday",
        "image": "https://static.wixstatic.com/media/38b2fc_54d05b0df7f94cf392731cd9bfe579cf~mv2.jpg/v1/fill/w_393,h_264,al_c,q_80,usm_0.66_1.00_0.01/38b2fc_54d05b0df7f94cf392731cd9bfe579cf~mv2.webp",
        "url": "https://www.facebook.com/Riconekt/",
        "bio": " I am an activist, artist, & Lyracist striving to bring EMPOWERING words to the people. I Rap, sing, beatbox, & play the ukulele with a variety of musicians. I've been traveling almost a decade sharing my conscious flowetry with the world."
    }



];
console.log("end of the band data", db.Bands)
db.Bands
    .remove({})
    .then(() => db.Bands.collection.insertMany(bandSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });









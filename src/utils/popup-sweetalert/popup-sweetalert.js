import Swal from 'sweetalert2'
import 'animate.css'

import './index.scss'

export const sweetalertPopup = (src) => {
    Swal.fire({
        html: `<video class="orca-video" autoplay="" controls="" poster="" preload="metadata" crossorigin="anonymous"><source src=${src} type="video/mp4"><track label="EN" srclang="en-US" src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/fiverr_lohp_video_en-US.00c8c11.vtt" default="" kind="subtitles"><track label="DE" srclang="de-DE" src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/fiverr_lohp_video_de-DE.479343e.vtt" kind="subtitles"><track label="ES" srclang="es" src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/fiverr_lohp_video_es.0e7d9ce.vtt" kind="subtitles"><track label="FR" srclang="fr-FR" src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/fiverr_lohp_video_fr-FR.62936b3.vtt" kind="subtitles"><track label="IT" srclang="it-IT" src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/fiverr_lohp_video_it-IT.15d2b21.vtt" kind="subtitles"><track label="NL" srclang="nl-NL" src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/fiverr_lohp_video_nl-NL.23e247e.vtt" kind="subtitles"><track label="PT" srclang="pt-BR" src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/fiverr_lohp_video_pt-BR.b8ba68e.vtt" kind="subtitles"></video>`,
        showConfirmButton: false,
        showClass: {
            popup: 'animate__animated animate__fadeIn',
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOut',
        },
    })
}

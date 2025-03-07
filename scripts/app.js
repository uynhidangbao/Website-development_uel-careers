$(document).ready(function(){
    $(".timviec2-container").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow:
            `<button type='button' class='slick-next pull-right'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
    });
    $('.sukien1-container').slick({
        slidesToShow: 1,
        arrows: false,
        dots: true,
        autoplaySpeed: 1000,
        infinite: true,
    });
    $('.sukien3-container').slick({
        slidesToShow: 4,
        arrows: false,
        dots: true,
        
    });
    $('.sukien4-container').slick({
        slidesToShow: 4,
        arrows: false,
        dots: true,

    });
    $('.ctyhangdau5-container').slick({
        slidesToShow: 2,
        infinite: true,
        nextArrow:
            `<button type='button' class='slick-next pull-right'><ion-icon name="chevron-back"></ion-icon></button>`,
    });
    $('.cungnhinlai-container').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        nextArrow:
            `<button type='button' class='slick-next pull-right'><ion-icon name="chevron-back"></ion-icon></button>`,
    });
    $('.cungnhinlai2-container').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        nextArrow:
            `<button type='button' class='slick-next pull-right'><ion-icon name="chevron-back"></ion-icon></button>`,
    });
    $('.chitietcongviec-col1_info2_mtlv_container').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        nextArrow:
            `<button type='button' class='slick-next pull-right'><ion-icon name="chevron-back"></ion-icon></button>`,
    });
    $('.congviecbansethich-container').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        prevArrow:
        `<button type='button' class='slick-prev pull-left'><ion-icon name="chevron-forward"></ion-icon></button>`,  
        nextArrow:
            `<button type='button' class='slick-next pull-right'><ion-icon name="chevron-back"></ion-icon></button>`,
   
    });
    
    $(".profile_gv-col2_section2_container").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow:
            `<button type='button' class='slick-next pull-right'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
    });

    $(".profile_gv-col2_section6_container").slick({
        infinite: false,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        nextArrow:
            `<button type='button' class='slick-next pull-right'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
    });
    $(".thugioithieu-popup2_item_container").slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        nextArrow:
        `<button type='button' class='slick-prev pull-left'><ion-icon name="chevron-forward"></ion-icon></button>`,  
        prevArrow:
            `<button type='button' class='slick-next pull-right'><ion-icon name="chevron-back"></ion-icon></button>`,
    });
    $(".profile_dn-lsut_col3_section1_container").slick({
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        
        nextArrow:
        `<button type='button' class='slick-prev pull-left'><ion-icon name="chevron-forward"></ion-icon></button>`,  
        prevArrow:
            `<button type='button' class='slick-next pull-right'><ion-icon name="chevron-back"></ion-icon></button>`,
    });
});


const A = document.querySelector.bind(document)
const AA = document.querySelectorAll.bind(document)

const navigations = AA(".chitietcongviec-col1_navigation")
const infotabs = AA(".chitietcongviec-col1_infotab")

navigations.forEach((navigation, index) => {
    navigation.onclick = function () {
        const infotab = infotabs[index]

        A('.chitietcongviec-col1_navigation.active').classList.remove('active')
        A('.chitietcongviec-col1_infotab.active').classList.remove('active')

        this.classList.add('active')
        infotab.classList.add('active')
    }
});

const lsut_navigations = AA(".danhgia_sv-col3_navigation")
const lsut_items = AA(".profile_dn-lsut_col3_section3")

lsut_navigations.forEach((lsut_navigation, index) => {
    lsut_navigation.onclick = function () {
        const lsut_item = lsut_items[index]

        A('.danhgia_sv-col3_navigation.active').classList.remove('active')
        A('.profile_dn-lsut_col3_section3.active').classList.remove('active')

        this.classList.add('active')
        lsut_item.classList.add('active')
    }
});


const days = AA(".profile_dn-lsut_col2_item3_day")



const confirms = A(".thugioithieu-col2_confirms")
const confirm2 = A(".thugioithieu-col2_confirm2")
const dexuat = A('.thugioithieu-col2_dexuat')
const warranty = A('.thugioithieu-col1_warranty')
const container = A('.thugioithieu-container')
const popup = A('.thugioithieu-popup')
const popup2 = A('.thugioithieu-popup2')
const popup3 = A('.thugioithieu-popup3')
const popup4 = A('.thugioithieu-popup4')
const theme = A('.thugioithieu-theme')
const upload1 = A('.thugioithieu-popup_item_detail1')
const upload2 = A('.thugioithieu-popup_item_detail2')
const btn_done = A('.thugioithieu-popup_button2')
const btn_up_1 = A('.thugioithieu-popup2_button2')
const btn_up_2 = A('.thugioithieu-popup3_button2')
const label1 = A('.thugioithieu-popup_item_upload_label1')
const label2 = A('.thugioithieu-popup_item_upload_label2')


const dttd_notis1 = A('.ungtuyen-notifications1')
const dttd_noti1 = A('.ungtuyen-notification1')
const dttd_notis2 = A('.ungtuyen-notifications2')
const dttd_noti2 = A('.ungtuyen-notification2')
const pro_dn_ct = A('.profile_dn-ctlsut_col3_section3_button2');

$(pro_dn_ct).on('click',function() {
    popup4.classList.add('active')
    theme.classList.add('active')
    this.classList.add('active')
    setTimeout(() => {
        popup4.classList.remove('active')
        theme.classList.remove('active')
    }, 1000);
    
    
});

$(document).on('click','#profile_dn-ctlsut_popup_button',function() {
    document.getElementById('profile_dn-ctlsut_popup2').classList.add('active')
    A('.profile_dn-ctlsut_popup').classList.remove('active')
    setTimeout(() => {
        document.getElementById('profile_dn-ctlsut_popup2').classList.remove('active')
        theme.classList.remove('active')
    }, 1000);
}); 
$(document).on('click','#profile_dn-lsut_col2_button2',function() {
    document.getElementById('profile_dn-ctlsut_popup3').classList.add('active')
    theme.classList.add('active')
}); 
$(document).on('click','#profile_dn-ctlsut_popup3_button',function() {
    document.getElementById('profile_dn-ctlsut_popup3').classList.remove('active')
    document.getElementById('profile_dn-ctlsut_popup4').classList.add('active')
    setTimeout(() => {
        document.getElementById('profile_dn-ctlsut_popup4').classList.remove('active')
        theme.classList.remove('active')
        window.location = "profile_DN_end.html"
    }, 1000);
}); 

$(A('.danhgia_sv-col3_item')).on('click',function() {
    window.location = "thugioithieu_danhgia.html"
});


$(A('.profile_dn-ctlsut_col3_section3_button4')).on('click',function() {
    A('.profile_dn-ctlsut_popup').classList.add('active')
    theme.classList.add('active')
});  

$(A('.timviec4-col2_item')).on('click',function() {
    window.location = "timviec_chitietcongviec.html"
});    

$(dttd_notis1).on('click',function() {
    A('.ungtuyen-notifications1.active').classList.remove('active')
    
    dttd_noti1.classList.add('active')
});
$(dttd_notis2).on('click',function() {
    A('.ungtuyen-notifications2.active').classList.remove('active')
    
    dttd_noti2.classList.add('active')
});
$(dttd_noti1).on('click',function() {
    this.classList.remove('active')
    
    dttd_notis1.classList.add('active')
});
$(dttd_noti2).on('click',function() {
    this.classList.remove('active')
    
    dttd_notis2.classList.add('active')
});

const dttd_submit = A('.ungtuyen-submit')
$(dttd_submit).on('click',function() {
    popup4.classList.add('active')
    theme.classList.add('active')
    setTimeout(() => {
        window.location = "profile_DN_td.html#"
    }, 1000);4
});

const dgcv_btn_done = A('.danhgiacv-col2_group3_button')
const dgcv_group3 = A('.danhgiacv-col2_group3')

$(dgcv_group3).on('click',function() {
    dgcv_group3.classList.remove('active')
    confirm2.classList.add('active')
});


$(confirms).on('click',function() {
    A('.thugioithieu-col2_confirm.active').classList.remove('active')
    confirm2.classList.add('active')
    dexuat.classList.add('active')
    warranty.classList.add('active')
});
$(dexuat).on('click',function() {
    theme.classList.add('active')
    popup.classList.add('active')
    warranty.classList.remove('active')
});
$(upload1).on('click',function() {
    popup.classList.remove('active')
    popup2.classList.add('active')
    warranty.classList.remove('active')
});
$(upload2).on('click',function() {
    popup.classList.remove('active')
    popup3.classList.add('active')
    warranty.classList.remove('active')
});
$(btn_up_1).on('click',function() {
    popup2.classList.remove('active')
    label1.classList.add('active')
    popup.classList.add('active')
});
$(btn_up_2).on('click',function() {
    popup3.classList.remove('active')
    label2.classList.add('active')
    popup.classList.add('active')
});
$(btn_done).on('click',function() {
    popup3.classList.remove('active')
    label2.classList.add('active')
    popup.classList.add('active')
});
$(btn_done).on('click',function() {
    popup.classList.remove('active')
    popup4.classList.add('active')
    setTimeout(() => {
        popup4.classList.remove('active')
        theme.classList.remove('active')
    }, 1000);
});
$(popup4).on('click',function() {
    
});









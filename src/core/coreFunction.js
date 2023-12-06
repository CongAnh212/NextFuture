import { createToaster } from '@meforma/vue-toaster'
const toastr =  createToaster({
    position: 'bottom-left'
})
export default {
    date_format(now) {
        return moment(now).format('DD/MM/yyyy');
    },
    number_format(number, decimals = 2, dec_point = ",", thousands_sep = ".") {
        var n = number,
            c = isNaN((decimals = Math.abs(decimals))) ? 2 : decimals;
        var d = dec_point == undefined ? "," : dec_point;
        var t = thousands_sep == undefined ? "." : thousands_sep,
            s = n < 0 ? "-" : "";
        var i = parseInt((n = Math.abs(+n || 0).toFixed(c))) + "",
            j = (j = i.length) > 3 ? j % 3 : 0;

        return (s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d +
            Math.abs(n - i)
                .toFixed(c)
                .slice(2)
            : "")
        );
    },
    hoursDifference(time) {
        const currentTime = new Date(); // Thời điểm hiện tại
        const startTime = new Date(time);
        const timeDiff = currentTime - startTime; // Hiệu giữa hai thời điểm tính bằng mili giây

        if (timeDiff < 60 * 1000) { // Nếu thời gian giữa hai điểm ít hơn 1 phút
            return `${Math.round(timeDiff / 1000)} seconds`;
        } else if (timeDiff < 60 * 60 * 1000) { // Nếu thời gian giữa hai điểm ít hơn 1 giờ
            const minutes = timeDiff / (1000 * 60); // Chuyển đổi thành phút
            return `${Math.round(minutes)} minutes`;
        } else if (timeDiff < 24 * 60 * 60 * 1000) { // Nếu thời gian giữa hai điểm ít hơn 24 giờ
            const hours = timeDiff / (1000 * 60 * 60); // Chuyển đổi thành giờ
            return `${Math.round(hours)} hours`;
        } else if (timeDiff < 7 * 24 * 60 * 60 * 1000) { // Nếu thời gian giữa hai điểm ít hơn 7 ngày
            const days = timeDiff / (1000 * 60 * 60 * 24); // Chuyển đổi thành ngày
            return `${Math.round(days)} days`;
        } else if (timeDiff < 30 * 24 * 60 * 60 * 1000) { // Nếu thời gian giữa hai điểm ít hơn 30 ngày (1 tháng)
            const weeks = timeDiff / (1000 * 60 * 60 * 24 * 7); // Chuyển đổi thành tuần
            return `${Math.round(weeks)} weeks`;
        } else if (timeDiff < 365 * 24 * 60 * 60 * 1000) { // Nếu thời gian giữa hai điểm ít hơn 365 ngày (1 năm)
            const months = timeDiff / (1000 * 60 * 60 * 24 * 30); // Chuyển đổi thành tháng
            return `${Math.round(months)} months`;
        } else {
            const years = timeDiff / (1000 * 60 * 60 * 24 * 365); // Chuyển đổi thành năm
            return `${Math.round(years)} years`;
        }
    },

    roundToDecimal(number, decimalPlaces) {
        const multiplier = 10 ** decimalPlaces;
        return Math.round(number * multiplier) / multiplier;
    },
    displaySuccess(res) {
        var message = res.data.message;
        if(res.data.status == 1) {
            toastr.show(message);
        } else if(res.data.status == 0) {
            toastr.error(message);
        } else {
            toastr.warning(message);
        }
    },

    // displayErrors(err) {
    //     const time = 500;
    //     var errors = err.response.data.errors;
    //     var errorArray = [];
    //     Object.keys(errors).forEach(function (key) {
    //         toastr.error(errors[key][0]);
    //     });
    //     if (err.response.data.reload) {
    //         if (err.response.data.link != "") {
    //             setTimeout(
    //                 'window.location = "' + err.response.data.link + '"',
    //                 time
    //             );
    //         } else {
    //             setTimeout("location.reload()", time);
    //         }
    //     }
    // },
}
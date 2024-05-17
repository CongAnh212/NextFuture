import { createToaster } from "@meforma/vue-toaster";
const toastr = createToaster({
    position: "bottom-left",
});
export default {
    date_format(now) {
        return moment(now).format("DD/MM/yyyy");
    },
    number_format(number, decimals = 2, dec_point = ",", thousands_sep = ".") {
        var n = number,
            c = isNaN((decimals = Math.abs(decimals))) ? 2 : decimals;
        var d = dec_point == undefined ? "," : dec_point;
        var t = thousands_sep == undefined ? "." : thousands_sep,
            s = n < 0 ? "-" : "";
        var i = parseInt((n = Math.abs(+n || 0).toFixed(c))) + "",
            j = (j = i.length) > 3 ? j % 3 : 0;

        return (
            s +
            (j ? i.substr(0, j) + t : "") +
            i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) +
            (c
                ? d +
                  Math.abs(n - i)
                      .toFixed(c)
                      .slice(2)
                : "")
        );
    },
    hoursDifference(time) {
        const units = [
            ["Just now", 1], // seconds
            ["minutes", 60], // minutes
            ["hours", 60], // hours
            ["days", 24], // days
            ["weeks", 7], // weeks
            ["months", 4.34524], // months, average weeks in a month
            ["years", 12], // years
        ];

        let currentTime = new Date();
        let startTime = new Date(time);
        let diff = Math.abs(currentTime - startTime) / 1000; // difference in seconds

        let unitIndex = 0;

        while (
            unitIndex < units.length - 1 &&
            diff >= units[unitIndex + 1][1]
        ) {
            diff /= units[unitIndex + 1][1];
            unitIndex++;
        }

        diff = Math.round(diff);

        // If the unit is "Just now", return the string without the number
        if (units[unitIndex][0] === "Just now") {
            return units[unitIndex][0];
        } else {
            return diff + " " + units[unitIndex][0];
        }
    },
    roundToDecimal(number, decimalPlaces) {
        const multiplier = 10 ** decimalPlaces;
        return Math.round(number * multiplier) / multiplier;
    },
    displaySuccess(res) {
        var message = res.data.message;
        if (res.data.status == 1) {
            toastr.info(message);
        } else if (res.data.status == 0) {
            toastr.error(message);
        } else {
            toastr.warning(message);
        }
    },
    handleSwitchingFromTimestampToCountdownHours(a) {
        const date = new Date(a);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const normalTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

        var parts = normalTime.split(/\/|\s|:/);
        var datee = new Date(
            parts[2],
            parts[1] - 1,
            parts[0],
            parts[3],
            parts[4],
            parts[5]
        );
        var isoDateString = datee.toISOString();

        return this.hoursDifference(isoDateString);
    },
    switchtimestamptToNomalTime(a) {
        const date = new Date(a);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const normalTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

        return normalTime;
    },
    checkConversation(arr, receiver_id) {
        let check = false;
        arr.forEach((element) => {
            if (
                element.sender.id == receiver_id ||
                element.receiver.id == receiver_id
            ) {
                check = true;
                return;
            }
        });

        return check;
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
};

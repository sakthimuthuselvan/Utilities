const alignCamelCaseString = (str) => {
        var convertedString = "";
        if (str !== "") {
            convertedString = str.replace(/(^|_)(\w)/g, (_, __, match) => ' ' + match.toUpperCase()).replace(/_/g, '');
        }
        return convertedString;
    }

function setKeyDeep(
  object: any,
  index: number,
  keyArray: string[],
  value: number
): any {
  const key = keyArray[index];
  if (!object[key]) {
    object[key] = {};
  }
  if (index === keyArray.length - 1) {
    return {
      ...object,
      [key]: value,
    };
  } else {
    return {
      ...object,
      [key]: setKeyDeep(object[key], index + 1, keyArray, value),
    };
  }
}
function setInitial(objArray: any[], keyArray: string[], accumulator: any) {
  let value = objArray[0];
  keyArray.forEach((key1) => {
    value = value[key1];
  });
  accumulator = setKeyDeep(accumulator, 0, keyArray, value);
  return accumulator;
}
function setAverage(objArray: any[], keyArray: string[], accumulator: any) {
  let total = 0;
  objArray.forEach((obj) => {
    let objVal = obj;
    keyArray.forEach((keyItem) => {
      objVal = objVal[keyItem];
    });
    total += objVal;
  });
  const value = parseFloat((total / objArray.length).toFixed(2));
  accumulator = setKeyDeep(accumulator, 0, keyArray, value);
  return accumulator;
}
export function analyzeObj(
  obj: any,
  objArray: any[],
  keyArray: string[] = [],
  accumulator: any = {}
) {
  for (let key in obj) {
    const newKeyArray = [...keyArray, key];
    if (typeof obj[key] === "object") {
      accumulator = analyzeObj(obj[key], objArray, newKeyArray, accumulator);
    } else if (typeof obj[key] === "number") {
      accumulator = setAverage(objArray, newKeyArray, accumulator);
    } else {
      accumulator = setInitial(objArray, newKeyArray, accumulator);
    }
  }
  return accumulator;
}
const lighthouseMetrics = [
  {
    label: "First Contentful Paint",
    field: "first-contentful-paint",
  },
  {
    label: "Speed Index",
    field: "speed-index",
  },
  {
    label: "Time To Interactive",
    field: "interactive",
  },
  {
    label: "First Meaningful Paint",
    field: "first-meaningful-paint",
  },
  //   {
  //     label: "First CPU Idle",
  //     field: "speed-index",
  //   },
  //   {
  //     label: "Estimated Input Latency",
  //     field: "speed-index",
  //   },
];
export function getLighthouseDetails(
  lighthouseResponse: any,
  loadingExperience: any
) {
  const { audits, finalUrl } = lighthouseResponse;
  const requiredDetails: any = {
    url: {
      label: "URL",
      value: finalUrl,
    },
  };
  const { metrics } = loadingExperience;
  for (let key in metrics) {
    let words = key.split("_");
    words = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    requiredDetails[key] = {
      label: words.join(" "),
      value: metrics[key].category,
    };
  }
  lighthouseMetrics.forEach(({ label, field }) => {
    const details = audits[field];
    requiredDetails[field] = {
      label,
      value: details.numericValue,
      unit: details.numericUnit,
    };
  });

  return requiredDetails;
}

export function getFormattedData(data: any) {
  const rowData: any = {},
    headers: any = [];

  for (let key in data) {
    const obj = data[key];
    let value = obj.value;
    if (obj.unit === "millisecond") {
      value = obj.value + "ms";
    }
    rowData[key] = value;
    headers.push({
      label: obj.label,
      key,
    });
  }
  return { rowData, headers };
}

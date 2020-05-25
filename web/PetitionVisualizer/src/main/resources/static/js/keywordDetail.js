$(document).ready(function () {
  var chart = bb.generate({
    size: { height: 240 },
    data: {
      columns: [
        ["data1", 130, 89, 165, 278, 70, 206, 137, 62, 282, 210, 54, 223],
        ["data2", 54, 84, 28, 177, 69, 57, 174, 8, 130, 187, 76, 188],
      ],
      types: {
        data1: "line",
        data2: "area",
      },
    },
    bindto: "#newPetitionsKeywordChart",
  });
});

var tableditUrl = "example-ajax.php";

function loadTabledit() {
  var emptyjson = '{"-1":""}';

  $('#table1').Tabledit({
    url: tableditUrl,
    deleteButton: true,
    addButton: true,
    editButton: true,
    restoreButton: false,
    feedbackContainer: "#feedback1",
    columns: {
      identifier: [0, '#'],
      editable: [
        [1, 'nickname'],
        [2, 'firstname'],
        [3, 'lastname']
      ]
    },
    onDraw: function() {
      console.log('onDraw()');
    },
    onSuccess: function(data, textStatus, jqXHR) {
      console.log('onSuccess(data, textStatus, jqXHR)');
      console.log(data);
      console.log(textStatus);
      console.log(jqXHR);
    },
    onFail: function(jqXHR, textStatus, errorThrown) {
      console.log('onFail(jqXHR, textStatus, errorThrown)');
      console.log(jqXHR);
      console.log(textStatus);
      console.log(errorThrown);
    },
    onAlways: function() {
      console.log('onAlways()');
    },
    onAjax: function(action, serialize) {
      console.log('onAjax(action, serialize)');
      console.log(action);
      console.log(serialize);
    }
  });

  $('#table2').Tabledit({
    url: tableditUrl,
    deleteButton: true,
    addButton: true,
    editButton: true,
    hideCounter: true,
    feedbackContainer: "#feedback2",
    columns: {
      identifier: [0, '#'],
      editable: [
        [1, 'car'],
        [2, 'color'],
      ]
    },
    onDraw: function() {
      console.log('onDraw()');
    },
    onSuccess: function(data, textStatus, jqXHR) {
      console.log('onSuccess(data, textStatus, jqXHR)');
      console.log(data);
      console.log(textStatus);
      console.log(jqXHR);
    },
    onFail: function(jqXHR, textStatus, errorThrown) {
      console.log('onFail(jqXHR, textStatus, errorThrown)');
      console.log(jqXHR);
      console.log(textStatus);
      console.log(errorThrown);
    },
    onAlways: function() {
      console.log('onAlways()');
    },
    onAjax: function(action, serialize) {
      console.log('onAjax(action, serialize)');
      console.log(action);
      console.log(serialize);
    }
  });

  $('#table3').Tabledit({
    url: tableditUrl,
    deleteButton: false,
    addButton: true,
    editButton: false,
    hideCounter: true,
    feedbackContainer: "#feedback3",
    eventType: 'dblclick',
    columns: {
      identifier: [0, '#'],
      editable: [
        [1, 'game'],
        [2, 'price', '{"0": "50 euro", "1":"20 euro"}']
      ]
    },
    onDraw: function() {
      console.log('onDraw()');
    },
    onSuccess: function(data, textStatus, jqXHR) {
      console.log('onSuccess(data, textStatus, jqXHR)');
      console.log(data);
      console.log(textStatus);
      console.log(jqXHR);
    },
    onFail: function(jqXHR, textStatus, errorThrown) {
      console.log('onFail(jqXHR, textStatus, errorThrown)');
      console.log(jqXHR);
      console.log(textStatus);
      console.log(errorThrown);
    },
    onAlways: function() {
      console.log('onAlways()');
    },
    onAjax: function(action, serialize) {
      console.log('onAjax(action, serialize)');
      console.log(action);
      console.log(serialize);
    }
  });

  $('#table4').Tabledit({
    url: tableditUrl,
    deleteButton: true,
    addButton: true,
    editButton: true,
    restoreButton: true,
    feedbackContainer: "#feedback4",
    rowCounter: "Nr.",
    columns: {
      identifier: [0, '#'],
      editable: [
        [1, 'game'],
        [2, 'price', '{"0": "50 euro", "1":"20 euro"}']
      ]
    },
    onDraw: function() {
      console.log('onDraw()');
    },
    onSuccess: function(data, textStatus, jqXHR) {
      console.log('onSuccess(data, textStatus, jqXHR)');
      console.log(data);
      console.log(textStatus);
      console.log(jqXHR);
    },
    onFail: function(jqXHR, textStatus, errorThrown) {
      console.log('onFail(jqXHR, textStatus, errorThrown)');
      console.log(jqXHR);
      console.log(textStatus);
      console.log(errorThrown);
    },
    onAlways: function() {
      console.log('onAlways()');
    },
    onAjax: function(action, serialize) {
      console.log('onAjax(action, serialize)');
      console.log(action);
      console.log(serialize);
    }
  });
}

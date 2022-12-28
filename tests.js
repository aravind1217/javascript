function appartmentHunting(blocks, reqs) {
    var closestReqDistance, maxDistanceAtBlocks;
  
    maxDistanceAtBlocks = function () {
      var a = [],
          b = blocks;
  
      for (var c = 0, d = b.length; c < d; c += 1) {
        var block = b[c];
  
        a.push(Number.parseFloat("-inf"));
      }
  
      return a;
    }.call(this);
  
    for (var i = 0, a = blocks.length; i < a; i += 1) {
      for (var req, d = 0, b = reqs, c = b.length; d < c; d += 1) {
        req = b[d];
        closestReqDistance = Number.parseFloat("inf");
  
        for (var j = 0, e = blocks.length; j < e; j += 1) {
          if (blocks[j][req]) {
            closestReqDistance = min(closestReqDistance, distanceBetween(i, j));
          }
        }
  
        maxDistanceAtBlocks[i] = max(maxDistanceAtBlocks[i], closestReqDistance);
      }
    }
  
    return getIndexAtMinValue(maxDistanceAtBlocks);
  }
  
  function distanceBetween(i, j) {
    return abs(i - j);
  }
  
  function getIndexAtMinValue(array) {
    var currentValue, idxAtMinValue, minValue;
    idxAtMinValue = 0;
    minValue = Number.parseFloat("inf");
  
    for (var i = 0, a = array.length; i < a; i += 1) {
      currentValue = array[i];
  
      if (currentValue < minValue) {
        idxAtMinValue = i;
        minValue = currentValue;
      }
    }
  
    return idxAtMinValue;
  }
  
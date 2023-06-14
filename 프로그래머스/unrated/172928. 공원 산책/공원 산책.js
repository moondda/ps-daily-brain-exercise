function solution(park, routes) {
  let start = [];
  let start_x;
  let start_y;
  let x;

  for (let i = 0; i < park.length; i++) {
    // 시작지점
    for (let j = 0; j < park[i].length; j++) {
      if (park[i][j] === "S") {
        start = [i, j];
        start_x = i;
        start_y = j;
      }
    }
  }

  let length = park[0].length;

  for (let i = 0; i < routes.length; i++) {
    // 얼마큼 이동하는지 먼저 체크
    let walk_count = parseInt(routes[i][2]);
    let dir = routes[i][0];

    switch (dir) {
      case "E": {
        x = false;
        if (start_y + walk_count >= length) break;
        for (let i = 1; i <= walk_count; i++) {
          if (park[start_x][start_y + i] === "X") {
            x = true;
            break;
          }
        }
        if (!x) start_y += walk_count;
        break;
      }
      case "W": {
        x = false;
        if (start_y - walk_count < 0) break;
        for (let i = 1; i <= walk_count; i++) {
          if (park[start_x][start_y - i] === "X") {
            x = true;
            break;
          }
        }
        if (!x) start_y -= walk_count;
        break;
      }
      case "S": {
        x = false;
        if (start_x + walk_count >= park.length) break;
        for (let i = 1; i <= walk_count; i++) {
          if (park[start_x + i][start_y] === "X") {
            x = true;
            break;
          }
        }
        if (!x) start_x += walk_count;
        break;
      }
      case "N": {
        x = false;
        if (start_x - walk_count < 0) break;
        for (let i = 1; i <= walk_count; i++) {
          if (park[start_x - i][start_y] === "X") {
            x = true;
            break;
          }
        }
        if (!x) start_x -= walk_count;
        break;
      }
    }
  }

  return [start_x, start_y];
}

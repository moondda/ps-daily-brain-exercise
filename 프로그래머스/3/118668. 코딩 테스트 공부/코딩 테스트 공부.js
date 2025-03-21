function solution(alp, cop, problems) {
    const INF = Infinity;
    let goal_al = alp;
    let goal_co = cop;

    // 목표 알고력과 코딩력 계산
    for (let i = 0; i < problems.length; i++) {
        goal_al = Math.max(goal_al, problems[i][0]);
        goal_co = Math.max(goal_co, problems[i][1]);
    }

    // 문제 추가
    problems.push([0, 0, 0, 1, 1]);
    problems.push([0, 0, 1, 0, 1]);

    // 방문 배열 초기화
    let visit = Array.from({ length: 151 }, () => Array(151).fill(INF));
    visit[alp][cop] = 0;

    // 알고력과 코딩력에 대해 탐색
    for (let i = alp; i <= goal_al; i++) {
        for (let j = cop; j <= goal_co; j++) {

            if (i === goal_al && j === goal_co) {
                return visit[i][j];
            }

            const cur_G = visit[i][j];

            // 모든 문제를 확인하면서 상태를 갱신
            for (let k = 0; k < problems.length; k++) {
                if (problems[k][0] > i || problems[k][1] > j) continue;

                const n_al = Math.min(i + problems[k][2], goal_al);
                const n_co = Math.min(j + problems[k][3], goal_co);

                if (visit[n_al][n_co] > cur_G + problems[k][4]) {
                    visit[n_al][n_co] = cur_G + problems[k][4];
                }
            }
        }
    }

    return INF; 
}



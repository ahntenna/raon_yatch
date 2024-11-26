function Alert(title, message) {
    const element = `<!-- Hidden Alert -->
    <div class="modal modal-blur fade" id="modal-custom" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
            <div class="modal-content">
    
                <div class="modal-header">
                    <h5 class="modal-title" id="modal-custom-title">${title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
    
                <div class="modal-body">
                    <div class="row mb-3 align-items-end">
                        <div class="col" id="modal-custom-message">
                            ${message}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>`;

    $('body').append(element);
    let modalElement = document.getElementById('modal-custom');
    let modal = new bootstrap.Modal(modalElement);
    modal.show()
    // 3. 모달이 닫히면 (hidden 이벤트) 모달을 제거
    $('#modal-custom').on('hidden.bs.modal', function () {
        $(this).remove(); // 모달을 body에서 제거
    });
}

function calc_top(id) {
    let player_number;
    try {
        player_number = Number(id.split('_')[1]);
    } catch {
        Alert('실패', '플레이어 오류 2');
        return false
    }

    const ace = $(`#ace_${player_number}`)[0];
    const dual = $(`#dual_${player_number}`)[0];
    const tripple = $(`#tripple_${player_number}`)[0];
    const quad = $(`#quad_${player_number}`)[0];
    const penta = $(`#penta_${player_number}`)[0];
    const hexa = $(`#hexa_${player_number}`)[0];

    let n_ace = ace.value;
    if (n_ace !== null && n_ace !== undefined) {
        try {
            n_ace = Number(n_ace);
        } catch {
            n_ace = 0;
        }
    }
    let n_dual = dual.value;
    if (n_dual !== null && n_dual !== undefined) {
        try {
            n_dual = Number(n_dual);
        } catch {
            n_dual = 0;
        }
    }
    let n_tripple = tripple.value;
    if (n_tripple !== null && n_tripple !== undefined) {
        try {
            n_tripple = Number(n_tripple);
        } catch {
            n_tripple = 0;
        }
    }
    let n_quad = quad.value;
    if (n_quad !== null && n_quad !== undefined) {
        try {
            n_quad = Number(n_quad);
        } catch {
            n_quad = 0;
        }
    }
    let n_penta = penta.value;
    if (n_penta !== null && n_penta !== undefined) {
        try {
            n_penta = Number(n_penta);
        } catch {
            n_penta = 0;
        }
    }
    let n_hexa = hexa.value;
    if (n_hexa !== null && n_hexa !== undefined) {
        try {
            n_hexa = Number(n_hexa);
        } catch {
            n_hexa = 0;
        }
    }

    const top = $(`#top_${player_number}`)[0];
    top.value = n_ace + n_dual + n_tripple + n_quad + n_penta + n_hexa;
}

function calc(event) {
    const element_id = event.srcElement.id;
    if (!element_id.includes('calc_')) {
        Alert('실패', '플레이어 오류 1');
        return false;
    }

    let player_number;
    try {
        player_number = Number(element_id.split('calc_')[1]);
    } catch {
        Alert('실패', '플레이어 오류 2');
        return false
    }

    const ace = $(`#ace_${player_number}`)[0];
    const dual = $(`#dual_${player_number}`)[0];
    const tripple = $(`#tripple_${player_number}`)[0];
    const quad = $(`#quad_${player_number}`)[0];
    const penta = $(`#penta_${player_number}`)[0];
    const hexa = $(`#hexa_${player_number}`)[0];
    const top = $(`#top_${player_number}`)[0];
    const choice = $(`#choice_${player_number}`)[0];
    const fourcard = $(`#fourcard_${player_number}`)[0];
    const fullhouse = $(`#fullhouse_${player_number}`)[0];
    const small = $(`#small_${player_number}`)[0];
    const large = $(`#large_${player_number}`)[0];
    const yatch = $(`#yatch_${player_number}`)[0];
    const total = $(`#total_${player_number}`)[0];

    let n_ace = ace.value;
    if (n_ace !== null && n_ace !== undefined) {
        try {
            n_ace = Number(n_ace);
        } catch {
            n_ace = 0;
        }
    }
    let n_dual = dual.value;
    if (n_dual !== null && n_dual !== undefined) {
        try {
            n_dual = Number(n_dual);
        } catch {
            n_dual = 0;
        }
    }
    let n_tripple = tripple.value;
    if (n_tripple !== null && n_tripple !== undefined) {
        try {
            n_tripple = Number(n_tripple);
        } catch {
            n_tripple = 0;
        }
    }
    let n_quad = quad.value;
    if (n_quad !== null && n_quad !== undefined) {
        try {
            n_quad = Number(n_quad);
        } catch {
            n_quad = 0;
        }
    }
    let n_penta = penta.value;
    if (n_penta !== null && n_penta !== undefined) {
        try {
            n_penta = Number(n_penta);
        } catch {
            n_penta = 0;
        }
    }
    let n_hexa = hexa.value;
    if (n_hexa !== null && n_hexa !== undefined) {
        try {
            n_hexa = Number(n_hexa);
        } catch {
            n_hexa = 0;
        }
    }
    let n_top = top.value;
    if (n_top !== null && n_top !== undefined) {
        try {
            n_top = Number(n_top);
        } catch {
            n_top = 0;
        }
    }
    let n_choice = choice.value;
    if (n_choice !== null && n_choice !== undefined) {
        try {
            n_choice = Number(n_choice);
        } catch {
            n_choice = 0;
        }
    }
    let n_fourcard = fourcard.value;
    if (n_fourcard !== null && n_fourcard !== undefined) {
        try {
            n_fourcard = Number(n_fourcard);
        } catch {
            n_fourcard = 0;
        }
    }
    let n_fullhouse = fullhouse.value;
    if (n_fullhouse !== null && n_fullhouse !== undefined) {
        try {
            n_fullhouse = Number(n_fullhouse);
        } catch {
            n_fullhouse = 0;
        }
    }
    let n_small = small.value;
    if (n_small !== null && n_small !== undefined) {
        try {
            n_small = Number(n_small);
        } catch {
            n_small = 0;
        }
    }
    let n_large = large.value;
    if (n_large !== null && n_large !== undefined) {
        try {
            n_large = Number(n_large);
        } catch {
            n_large = 0;
        }
    }
    let n_yatch = yatch.value;
    if (n_yatch !== null && n_yatch !== undefined) {
        try {
            n_yatch = Number(n_yatch);
        } catch {
            n_yatch = 0;
        }
    }

    total.value = n_ace + n_dual + n_tripple + n_quad + n_penta + n_hexa + n_choice + n_fourcard + n_fullhouse + n_small + n_large + n_yatch;
    
    const player = $(`#player_${player_number}`)[0].value;
    let msg = `${player} 님 ${total.value} 점 입니다.`;
    if (n_top >= 63) {
        total.value = Number(total.value) + 35;
        msg = `${player} 님 보너스 35점 포함 ${total.value} 점 입니다.`;
    }
    
    Alert('합계', msg);
}
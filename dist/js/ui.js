// 시스템 전체 UX 를 위한 스크립트. 이후 API로 이전합니다.
$('#navbar-menu').html(`
					<div class="navbar navbar-light">
						<div class="container-xl">
							<ul class="navbar-nav">
								<li class="nav-item">
									<a class="nav-link" href="./index.html" >
										<span class="nav-link-icon d-md-none d-lg-inline-block">
											<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="5 12 3 12 12 3 21 12 19 12" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
										</span>
										<span class="nav-link-title">대시보드</span>
									</a>
								</li>

								<li class="nav-item">
									<a class="nav-link" href="./iot.html" >
										<span class="nav-link-icon d-md-none d-lg-inline-block">
											<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" /><line x1="12" y1="12" x2="20" y2="7.5" /><line x1="12" y1="12" x2="12" y2="21" /><line x1="12" y1="12" x2="4" y2="7.5" /><line x1="16" y1="5.25" x2="8" y2="9.75" /></svg>
										</span>
										<span class="nav-link-title">점검</span>
									</a>
								</li>


								<li class="nav-item">
									<a class="nav-link" href="./status.html" >
										<span class="nav-link-icon d-md-none d-lg-inline-block">
											<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" /><path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" /></svg>
										</span>
										<span class="nav-link-title">상태</span>
									</a>
								</li>

								<li class="nav-item">
									<a class="nav-link" href="./history.html" >
										<span class="nav-link-icon d-md-none d-lg-inline-block">
											<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" /><line x1="12" y1="12" x2="12" y2="12.01" /><path d="M3 13a20 20 0 0 0 18 0" /></svg>
										</span>
										<span class="nav-link-title">작업 로그</span>
									</a>
								</li>

							</ul>
							<div class="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md-last" id="headerMenuCollapse">
								<div class="input-icon" id="searchPopup">
									<span class="input-icon-addon">
										<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="10" cy="10" r="7" /><line x1="21" y1="21" x2="15" y2="15" /></svg>
									</span>
									<input type="search" class="form-control" placeholder="검색…" tabindex="1" id="editSearch">
									<div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
										<div id="searchResult"></div>
										<div class="dropdown-divider"></div><a href="#" class="dropdown-item text-center" id="clearSearch">검색 결과 닫기</a>
									</div>
								</div>
							</div>
						</div>
					</div>
`
);
$('#help').html('<ul class="list-inline list-inline-dots mb-0"><li class="list-inline-item"><a href="./help_iot.html" class="link-secondary">도움말</a></li><li class="list-inline-item"><a href="./version_iot.html" class="link-secondary">버전정보</a></li></ul>');
$('#copyright').html('<ul class="list-inline list-inline-dots mb-0"><li class="list-inline-item">Siege</li><li class="list-inline-item">Raon Security 2023</li></ul>');
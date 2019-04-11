</div>
</div>
</div>
</div>
</div>
</div>

<div id="exampleModalLive" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog"
     aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" style="max-width: 1200px;">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title h4" id="myLargeModalLabel"> معنى الكلمة </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true"></span>
                </button>
            </div>
            <div class="modal-body">
                <div id="asd">

                </div>
            </div>
        </div>
    </div>
</div>
<!-- /#wrapper -->
<!-- Bootstrap core JavaScript -->


<script src="{{asset('public/vendor/jquery/jquery.min.js')}}"></script>
<script src="{{asset('public/js/vendor-all.min.js')}}"></script>
<script src="{{asset('public/plugins/bootstrap/js/bootstrap.min.js')}}"></script>
<script src="{{asset('public/js/pcoded.min.js')}}"></script>
<script src="{{asset('public/js/horizontal-menu.js')}}"></script>
<script src="{{asset('public/js/menu-setting.min.js')}}"></script>
<script src="{{asset('public/vendor/bootstrap/js/bootstrap.bundle.min.js')}}"></script>
<script src="{{asset('public/plugins/sweetalert/js/sweetalert.min.js')}}"></script>
@yield('js')

<script type="text/javascript">
    $(document).ready(function () {
        $('.sweet-basic').on('click', function () {
            swal('Hello world!');
        });
        $('.sweet-success').on('click', function () {
            swal("Good job!", "You clicked the button!", "success");
        });
        $('.sweet-warning').on('click', function () {
            swal("Good job!", "You clicked the button!", "warning");
        });
        $('.sweet-error').on('click', function () {
            swal("Good job!", "You clicked the button!", "error");
        });
        $('.sweet-info').on('click', function () {
            swal("Good job!", "You clicked the button!", "info");
        });
    });
</script>

<!-- New code -->
<script>

    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    (function () {
        if ($('#layout-sidenav').hasClass('sidenav-horizontal') || window.layoutHelpers.isSmallScreen()) {
            return;
        }
        try {
            window.layoutHelpers.setCollapsed(
                localStorage.getItem('layoutCollapsed') === 'true',
                false
            );
        } catch (e) {
        }
    })();
    $(function () {
        // Initialize sidenav
        $('#layout-sidenav').each(function () {
            new SideNav(this, {
                orientation: $(this).hasClass('sidenav-horizontal') ? 'horizontal' : 'vertical'
            });
        });

        // Initialize sidenav togglers
        $('body').on('click', '.layout-sidenav-toggle', function (e) {
            e.preventDefault();
            window.layoutHelpers.toggleCollapsed();
            if (!window.layoutHelpers.isSmallScreen()) {
                try {
                    localStorage.setItem('layoutCollapsed', String(window.layoutHelpers.isCollapsed()));
                } catch (e) {
                }
            }
        });
    });
    $(document).ready(function () {
        $("#pcoded").pcodedmenu({
            themelayout: 'horizontal',
            MenuTrigger: 'hover',
            SubMenuTrigger: 'hover',
        });


    });
</script>

</body>
</html>
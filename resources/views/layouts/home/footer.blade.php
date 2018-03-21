@section('footer')
    @if (isset($bottomMessage))
    	<footer>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <p>
                            <span class="copyright">
                                {{ $bottomMessage->copyright }}
                            </span>
                            <a href="/login" class="login" target="_blank">
                                <span>登录管理</span>
                            </a>
                        </p>
                    </div>
                    <div class="col-md-12">
                        <p>
                        地址：{{ $bottomMessage->address }} |
                        邮编：{{ $bottomMessage->postcode }} |
                        电话：{{ $bottomMessage->phone }} |
                        传真：{{ $bottomMessage->fax }} |
                        Email：{{ $bottomMessage->email }}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    @endif
@show
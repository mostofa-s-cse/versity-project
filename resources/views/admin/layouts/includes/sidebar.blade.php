<div class="sidebar" id="sidebar">
    <div class="sidebar-inner slimscroll">
        <div id="sidebar-menu" class="sidebar-menu">
            <ul class="sidebar-vertical">
                <li class="menu-title">
                    <span>Main</span>
                </li>

                <li class="submenu">
                    <a href="#" class="noti-dot"><i class="la la-home"></i> <span> Dashboard </span> <span
                            class="menu-arrow"></span></a>
                    <ul style="display: none;">
                        <li><a href="{{ url('admin/dashboard')}}">Dashboard</a></li>
                    </ul>
                </li>
                @if (Auth::user()->role == 'admin')
                    <li class="submenu">
                        <a href="#"><i class="la la-layer-group"></i> <span> Categories </span> <span
                                class="menu-arrow"></span></a>
                        <ul style="display: none;">
                            <li><a href="{{ route('categories.index')}}">All Categories</a></li>
                        </ul>
                    </li>
              
                
                <li class="submenu">
                    <a href="#"><i class="la la-people-carry"></i> <span> Supplier  </span> <span
                            class="menu-arrow"></span></a>
                    <ul style="display: none;">
                        <li><a href="{{ route('supplier.index')}}">Supplier Details</a></li>
                    </ul>
                </li>

                <li class="submenu">
                    <a href="#"><i class="la la-star-o"></i> <span> Purchase </span> <span
                            class="menu-arrow"></span></a>
                    <ul style="display: none;">
                        <li><a href="{{ route('purchase.index')}}">Purchase Details</a></li>
                        <li><a href="{{ route('purchase.outstock')}}">Out-Stock</a></li>
                    </ul>
                </li>

                <li class="submenu">
                    <a href="#"><i class="la la-box"></i> <span> Product </span> <span
                            class="menu-arrow"></span></a>
                    <ul style="display: none;">
                        <li><a href="{{ route('product.index')}}">All Product</a></li>
                        <li><a href="{{ route('product.outstock')}}">Out-Stock</a></li>
                        <li><a href="{{ route('expired')}}">Expired</a></li>
                    </ul>
                </li>


                <li class="submenu">
                    <a href="#"><i class="la la-chart-bar"></i> <span> Sales </span> <span
                            class="menu-arrow"></span></a>
                    <ul style="display: none;">
                        <li><a href="{{ route('sales.index')}}">Add Sales</a></li>
                        <li><a href="{{ route('sales.details')}}">Sales Details</a></li>
                    </ul>
                </li>


                <li class="submenu">
                    <a href="#"><i class="la la-exclamation-triangle"></i> <span> Damage  </span> <span
                            class="menu-arrow"></span></a>
                    <ul style="display: none;">
                        <li><a href="{{route('damage.index')}}">Damage Details</a></li>
                    </ul>
                </li>

                <li class="submenu">
                    <a href="#"><i class="la la-file-alt"></i> <span> Report  </span> <span
                            class="menu-arrow"></span></a>
                    <ul style="display: none;">
                        <li><a href="{{ route('sales.reports')}}">Sale Report</a></li>
                        <li><a href="{{ route('purchase.reports')}}">Purchase Report</a></li>
                        <li><a href="{{ route('damage.reports')}}">Damage Report</a></li>
                    </ul>
                </li>

                {{-- <li class="submenu">
                    <a href="#"><i class="la la-qrcode"></i> <span> Barcode & Scanning  </span> <span
                            class="menu-arrow"></span></a>
                    <ul style="display: none;">
                        <li><a href="{{ route('barcodescanning.index')}}">Barcode Generation & Scanning</a></li>
                    </ul>
                </li> --}}

                {{-- <li class="submenu">
                    <a href="#"><i class="la la-user-alt"></i> <span> Accounts  </span> <span
                            class="menu-arrow"></span></a>
                    <ul style="display: none;">
                        <li><a href="{{ route('accounts.index')}}">Accounts Statement</a></li>
                        <li><a href="{{ route('billinghistory.index')}}">Billing History</a></li>
                        <li><a href="{{ route('othertransaction.index')}}">Other Transaction</a></li>
                        <li><a href="{{ route('transactionhistory.index')}}">Transaction History</a></li>
                    </ul>
                </li> --}}

                <!-- <li class="submenu">
                    <a href="#"><i class="la la-file-invoice-dollar"></i> <span> Cash Memo  </span> <span
                            class="menu-arrow"></span></a>
                    <ul style="display: none;">
                        <li><a href="{{ route('cashmemo.index')}}">Cash Memo</a></li>
                    </ul>
                </li> -->


                <li class="submenu">
                    <a href="#"><i class="la la-city"></i> <span> Inventory  </span> <span
                            class="menu-arrow"></span></a>
                    <ul style="display: none;">
                        <li><a href="{{ route('inventory.index')}}">Inventory Details</a></li>
                    </ul>
                </li>


                <li class="submenu">
                    <a href="#"><i class="la la-user-tag"></i> <span> Customer  </span> <span
                            class="menu-arrow"></span></a>
                    <ul style="display: none;">
                        <li><a href="{{ route('customer.index')}}">Customer Details</a></li>
                    </ul>
                </li>

                <!-- <li class="submenu">
                    <a href="#"><i class="la la-lock"></i> <span> Access Control  </span> <span
                            class="menu-arrow"></span></a>
                    <ul style="display: none;">
                        <li><a href="{{ url('admin/products')}}">Permissions</a></li>
                        <li><a href="{{ url('admin/products')}}">Roles</a></li>
                    </ul>
                </li> -->

                <li class="submenu">
                    <a href="#"><i class="la la-users"></i> <span> User  </span> <span
                            class="menu-arrow"></span></a>
                    <ul style="display: none;">
                        <li><a href="{{ route('users.index')}}">All Users</a></li>
                    </ul>
                </li>
                @endif
                <li class="submenu">
                    <a href="#"><i class="la la-user-circle"></i> <span> Profile  </span> <span
                            class="menu-arrow"></span></a>
                    <ul style="display: none;">
                        <li><a href="{{ route('users.profile')}}">Profile</a></li>
                        <!-- <li><a href="{{ url('admin/products')}}"><i class="material-icons" style="font-size:20px;">backup</i>
                                <span>Backups</span></a></li> -->
                    </ul>
                </li>

                <!-- <li class="submenu">
                    <a href="#"><i class="la la-cog"></i> <span> Settings  </span> <span
                            class="menu-arrow"></span></a>
                    <ul style="display: none;">
                        <li><a href="{{ url('admin/products')}}">Settings</a></li>
                    </ul>
                </li> -->

            </ul>
        </div>
    </div>
</div>

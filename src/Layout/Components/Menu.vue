<template>
    <div class="nav-container primary-menu">
        <div class="mobile-topbar-header">
            <div>
                <img  src="../../assets/rocker/images/logo-icon.png" class="logo-icon" alt="logo icon">
            </div>
            <div>
                <h4 class="logo-text">Rukada</h4>
            </div>
            <div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
            </div>
        </div>
        <nav class="navbar navbar-expand-xl w-100">
            <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
                <li class="nav-item dropdown">
                    <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown">
                    <div class="parent-icon"><i class='bx bx-home-circle'></i>
                    </div>
                    <div class="menu-title">Dashboard</div>
                </a>
                <ul class="dropdown-menu">
                    <li> <a class="dropdown-item" href="index.html"><i class="bx bx-right-arrow-alt"></i>Default</a>
                    </li>
                    <li> <a class="dropdown-item" href="index2.html"><i class="bx bx-right-arrow-alt"></i>Alternate</a>
                    </li>
                    <li> <a class="dropdown-item" href="index3.html"><i class="bx bx-right-arrow-alt"></i>Graphical</a>
                    </li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown">
                    <div class="parent-icon"><i class='bx bx-cart'></i>
                    </div>
                    <div class="menu-title">eCommerce</div>
                    </a>
                    <ul class="dropdown-menu">
                    <li> <a class="dropdown-item" href="ecommerce-products.html"><i class="bx bx-right-arrow-alt"></i>Products</a>
                    </li>
                    <li> <a class="dropdown-item" href="ecommerce-products-details.html"><i class="bx bx-right-arrow-alt"></i>Product Details</a>
                    </li>
                    <li> <a class="dropdown-item" href="ecommerce-add-new-products.html"><i class="bx bx-right-arrow-alt"></i>Add New Products</a>
                    </li>
                    <li> <a class="dropdown-item" href="ecommerce-orders.html"><i class="bx bx-right-arrow-alt"></i>Orders</a>
                    </li>
                    </ul>
                    </li>
                    <li class="nav-item">
                    <a  class="nav-link" href="widgets.html">
                        <div class="parent-icon"><i class='bx bx-cookie'></i>
                        </div>
                        <div class="menu-title">Widgets</div>
                    </a>
                    </li>
                    <li class="nav-item dropdown">
                    <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown">
                    <div class="parent-icon"><i class="bx bx-category"></i>
                    </div>
                    <div class="menu-title">Application</div>
                    </a>
                    <ul class="dropdown-menu">
                    <li> <a class="dropdown-item" href="app-emailbox.html"><i class="bx bx-right-arrow-alt"></i>Email</a>
                    </li>
                    <li> <a class="dropdown-item" href="app-chat-box.html"><i class="bx bx-right-arrow-alt"></i>Chat Box</a>
                    </li>
                    <li> <a class="dropdown-item" href="app-file-manager.html"><i class="bx bx-right-arrow-alt"></i>File Manager</a>
                    </li>
                    <li> <a class="dropdown-item" href="app-contact-list.html"><i class="bx bx-right-arrow-alt"></i>Contatcs</a>
                    </li>
                    <li> <a class="dropdown-item" href="app-to-do.html"><i class="bx bx-right-arrow-alt"></i>Todo List</a>
                    </li>
                    <li> <a class="dropdown-item" href="app-invoice.html"><i class="bx bx-right-arrow-alt"></i>Invoice</a>
                    </li>
                    <li> <a class="dropdown-item" href="app-fullcalender.html"><i class="bx bx-right-arrow-alt"></i>Calendar</a>
                    </li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" href="javascript:;" data-bs-toggle="dropdown">
                    <div class="parent-icon"><i class="bx bx-line-chart"></i>
                    </div>
                    <div class="menu-title">Charts</div>
                    </a>
                    <ul class="dropdown-menu">
                    <li> <a class="dropdown-item" href="charts-apex-chart.html"><i class="bx bx-right-arrow-alt"></i>Apex</a>
                    </li>
                    <li> <a class="dropdown-item" href="charts-chartjs.html"><i class="bx bx-right-arrow-alt"></i>Chartjs</a>
                    </li>
                    <li> <a class="dropdown-item" href="charts-highcharts.html"><i class="bx bx-right-arrow-alt"></i>Highcharts</a>
                    </li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" href="javascript:;" data-bs-toggle="dropdown">
                    <div class="parent-icon"><i class='bx bx-bookmark-heart'></i>
                    </div>
                    <div class="menu-title">Components</div>
                    </a>
                    <ul class="dropdown-menu">
                    <li> <a class="dropdown-item" href="widgets.html"><i class="bx bx-right-arrow-alt"></i>Widgets</a>
                    </li>
                    <li> <a class="dropdown-item" href="component-alerts.html"><i class="bx bx-right-arrow-alt"></i>Alerts</a>
                    </li>
                    <li> <a class="dropdown-item" href="component-accordions.html"><i class="bx bx-right-arrow-alt"></i>Accordions</a>
                    </li>
                    <li> <a class="dropdown-item" href="component-buttons.html"><i class="bx bx-right-arrow-alt"></i>Buttons</a>
                    </li>
                    <li> <a class="dropdown-item" href="component-cards.html"><i class="bx bx-right-arrow-alt"></i>Cards</a>
                    </li>
                    <li> <a class="dropdown-item" href="component-list-groups.html"><i class="bx bx-right-arrow-alt"></i>List Groups</a>
                    </li>
                    <li> <a class="dropdown-item" href="component-media-object.html"><i class="bx bx-right-arrow-alt"></i>Media Objects</a>
                    </li>
                    <li> <a class="dropdown-item" href="component-modals.html"><i class="bx bx-right-arrow-alt"></i>Modals</a>
                    </li>
                    <li> <a class="dropdown-item" href="component-navs-tabs.html"><i class="bx bx-right-arrow-alt"></i>Navs & Tabs</a>
                    </li>
                    <li> <a class="dropdown-item" href="component-navbar.html"><i class="bx bx-right-arrow-alt"></i>Navbar</a>
                    </li>
                    <li> <a class="dropdown-item" href="component-popovers-tooltips.html"><i class="bx bx-right-arrow-alt"></i>Popovers & Tooltips</a>
                    </li>
                    <li> <a class="dropdown-item" href="component-progress-bars.html"><i class="bx bx-right-arrow-alt"></i>Progress</a>
                    </li>
                    <li> <a class="dropdown-item" href="component-spinners.html"><i class="bx bx-right-arrow-alt"></i>Spinners</a>
                    </li>
                    <li> <a class="dropdown-item" href="component-notifications.html"><i class="bx bx-right-arrow-alt"></i>Notifications</a>
                    </li>
                    <li> <a class="dropdown-item" href="component-avtars-chips.html"><i class="bx bx-right-arrow-alt"></i>Avatrs & Chips</a>
                    </li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" href="javascript:;" data-bs-toggle="dropdown">
                    <div class="parent-icon"><i class="bx bx-lock"></i>
                    </div>
                    <div class="menu-title">Authentication</div>
                    </a>
                    <ul class="dropdown-menu">
                    <li> <a class="dropdown-item" href="authentication-signin.html" target="_blank"><i class="bx bx-right-arrow-alt"></i>Sign In</a>
                    </li>
                    <li> <a class="dropdown-item" href="authentication-signup.html" target="_blank"><i class="bx bx-right-arrow-alt"></i>Sign Up</a>
                    </li>
                    <li> <a class="dropdown-item" href="authentication-signin-with-header-footer.html" target="_blank"><i class="bx bx-right-arrow-alt"></i>Sign In with Header & Footer</a>
                    </li>
                    <li> <a class="dropdown-item" href="authentication-signup-with-header-footer.html" target="_blank"><i class="bx bx-right-arrow-alt"></i>Sign Up with Header & Footer</a>
                    </li>
                    <li> <a class="dropdown-item" href="authentication-forgot-password.html" target="_blank"><i class="bx bx-right-arrow-alt"></i>Forgot Password</a>
                    </li>
                    <li> <a class="dropdown-item" href="authentication-reset-password.html" target="_blank"><i class="bx bx-right-arrow-alt"></i>Reset Password</a>
                    </li>
                    <li> <a class="dropdown-item" href="authentication-lock-screen.html" target="_blank"><i class="bx bx-right-arrow-alt"></i>Lock Screen</a>
                    </li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" href="javascript:;" data-bs-toggle="dropdown">
                        <div class="parent-icon"><i class="bx bx-donate-blood"></i>
                        </div>
                        <div class="menu-title">Pages</div>
                    </a>
                    <ul class="dropdown-menu">
                        <li> <a class="dropdown-item" href="user-profile.html"><i class="bx bx-right-arrow-alt"></i>User Profile</a>
                        </li>
                        <li> <a class="dropdown-item" href="timeline.html"><i class="bx bx-right-arrow-alt"></i>Timeline</a>
                        </li>
                        <li> <a class="dropdown-item" href="pricing-table.html"><i class="bx bx-right-arrow-alt"></i>Pricing</a>
                        </li>
                        <li> <a class="dropdown-item" href="errors-404-error.html"><i class="bx bx-right-arrow-alt"></i>404 Error</a>
                        </li>
                        <li> <a class="dropdown-item" href="errors-500-error.html"><i class="bx bx-right-arrow-alt"></i>500 Error</a>
                        </li>
                        <li> <a class="dropdown-item" href="errors-coming-soon.html"><i class="bx bx-right-arrow-alt"></i>Coming Soon</a>
                        </li>
                    </ul>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" href="javascript:;" data-bs-toggle="dropdown">
                        <div class="parent-icon"><i class="bx bx-message-square-edit"></i>
                        </div>
                        <div class="menu-title">Forms</div>
                    </a>
                    <ul class="dropdown-menu">
                        <li> <a class="dropdown-item" href="form-elements.html"><i class="bx bx-right-arrow-alt"></i>Form Elements</a>
                        </li>
                        <li> <a class="dropdown-item" href="form-input-group.html"><i class="bx bx-right-arrow-alt"></i>Input Groups</a>
                        </li>
                        <li> <a class="dropdown-item" href="form-layouts.html"><i class="bx bx-right-arrow-alt"></i>Forms Layouts</a>
                        </li>
                        <li> <a class="dropdown-item" href="form-validations.html"><i class="bx bx-right-arrow-alt"></i>Form Validation</a>
                        </li>
                        <li> <a class="dropdown-item" href="form-wizard.html"><i class="bx bx-right-arrow-alt"></i>Form Wizard</a>
                        </li>
                        <li> <a class="dropdown-item" href="form-text-editor.html"><i class="bx bx-right-arrow-alt"></i>Text Editor</a>
                        </li>
                        <li> <a class="dropdown-item" href="form-file-upload.html"><i class="bx bx-right-arrow-alt"></i>File Upload</a>
                        </li>
                        <li> <a class="dropdown-item" href="form-date-time-pickes.html"><i class="bx bx-right-arrow-alt"></i>Date Pickers</a>
                        </li>
                        <li> <a class="dropdown-item" href="form-select2.html"><i class="bx bx-right-arrow-alt"></i>Select2</a>
                        </li>
                    </ul>
                    </li>
                </ul>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
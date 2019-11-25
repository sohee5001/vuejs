<template>
  <div class="hello">
    <DefaultHeader/>
    <Title :name=name></Title>

    <!-- about us start-->
    <section class="about_part section_padding">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-md-6 col-lg-6">
            <div class="about_part_img">
<!--              <img :src=about_part_img alt="">-->
            </div>
          </div>
          <div class="col-md-6 col-lg-5">
            <div class="about_part_text">
              <h2>Engineering Your
                Dreams With Us</h2>
              <p>Which cattle fruitful he fly visi won't let above lesser stars. Fly form wonder every let third form two air seas after us said day won light also  together midst two female she great to open.</p>
              <ul>
                <li>
                  <span class="flaticon-drop"></span>
                  <h3>Certified Company</h3>
                  <p>Be man air male shall under create light together grass fly dat also also his brought itself air abundantly </p>
                </li>
                <li>
                  <span class="flaticon-ui"></span>
                  <h3>Experience Employee</h3>
                  <p>Be man air male shall under create light together grass fly do also also his brought itself air abundantly </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- about us part end-->

    <section class="about_part experiance_part section_padding single_experiance_section">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-md-6 col-lg-6">
            <div class="about_part_text">
              <h2>We Are Experience
                in Construction</h2>
              <p>Their whose made waters there our, air above first give dry fruit that second whose herb creeping it us light spirit appear mans. So green abundantly She'd. Greater divide dry bearing years ourends herb upon which open lights had blessed replenish Cattle give his. Abundantly over saying which beast dominion multiply behold to wateo.</p>
              <div class="about_text_iner">
                <div class="about_text_counter">
                  <h2>20</h2>
                </div>
                <div class="about_iner_content">
                  <h3>year <span>of Experience</span></h3>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-6">
            <div class="about_part_img">
             <!-- <img :src=experiance_img alt="">-->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import DefaultHeader from '@/layouts/DefaultHeader'
  import Title from '@/components/Title'
  export default {
    name: 'about',
    components: {DefaultHeader,Title},
    data(){
      return {
        name : "About Us",
        experiance_img : require('../assets/img/experiance_img.png'),
        about_part_img : require('../assets/img/about_part_img.png'),
      }
    }
}
</script>

---
image: https://xiangcaihua-blog.oss-cn-shanghai.aliyuncs.com/pic-go/airflow1.gif
layout: intro
theme: light-icons
---

  <div class="absolute pt-6 left-12">
    <span class="p-1 rounded cursor-pointer hover:bg-white hover:bg-opacity-10 hover:opacity-90 opacity-60 flex justify-center items-center">
      Press Space for next page  <light-icon icon="arrow-narrow-right" size="24px"/> 
    </span>
  </div>

  <div class="mb-4 absolute bottom-4 left-12">
    <span class="text-6xl text-primary-lighter text-opacity-80" style="font-weight:500;" >
      Apache <light-icon icon="wind"/>
    </span>
    <div class="text-9xl text-white text-opacity-60" style="font-weight:600;" >
    AIRFLOW
    </div> 
  </div>

<a href="https://github.com/apache/airflow" target="_blank" alt="GitHub"
  class="abs-br m-6 text-xl icon-btn opacity-50 !border-none !hover:text-white">
  <carbon-logo-github />
</a>

---
layout: image-header-intro
imageHeader: '#/static/light-icons-logo.svg'
imageRight: '#/static/light-icons-cover.svg'
---

  <layout-tag layout-name="image-header-intro" />
  
  # What is Airflow?

  <div class="leading-snug text-black dark:text-white text-opacity-60 dark:text-opacity-60 mt-4">
    Airflow 是一个由社区创建的平台，用于以编程方式创作、安排和监控工作流. <light-icon icon="plane-departure" size="24px" />
  </div> 

sad

<!-- > Airflow 是一个由社区创建的平台，用于以编程方式创作、安排和监控工作流 -->

<!-- > Airflow is a platform created by the community to programmatically author, schedule and monitor workflows.

Airflow 是一个由社区创建的平台，用于以编程方式创作、安排和监控工作流。 -->


<!-- - 🗓 **Scheduler(调度器)** - Scheduler 是一种使用 DAG 定义结合元数据中的任务状态来决定哪些任务需要被执行以及任务执行优先级的过程。调度器通常作为服务运行。
- 👷‍♂️ **Executor(执行器)** - Executor 是一个消息队列进程，它被绑定到调度器中，用于确定实际执行每个任务计划的工作进程。有不同类型的执行器，每个执行器都使用一个指定工作进程的类来执行任务。例如，LocalExecutor 使用与调度器进程在同一台机器上运行的并行进程执行任务。 其他像 CeleryExecutor 的执行器使用存在于独立的工作机器集群中的工作进程执行任务。
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion

Read more about [Why Slidev?](https://sli.dev/guide/why) -->
<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
}
</style>



---
layout: dynamic-image 
image: 'https://source.unsplash.com/collection/94734566/1920x1080'
equal: false
left: true
---
  <layout-tag layout-name="dynamic-image" />

  <div class="text-black dark:text-white text-opacity-60 dark:text-opacity-60 pt-2 font-sm">
      <span class="text-sm">
        Image at Left
      </span>
  </div>
  <div class="text-primary dark:text-primary pb-2 pt-2">
    <span class="">
      Theme Configuration <light-icon icon="adjustments-horizontal"/>
    </span>
  </div>

```ts
layout: dynamic-image //Layout Name
image: 'https://source.unsplash.com/collection/94734566/1920x1080'
equal: false
left: true
```


---
layout: center-image
image: '/static/light-icons-screenshot.png'
---
  <layout-tag layout-name="center-image" />

  <div class="mb-4">
    <span class="text-3xl text-primary dark:text-primary" style="font-weight:500;" >Designed for Innovative Projects <light-icon icon="wand" /></span>
  </div>

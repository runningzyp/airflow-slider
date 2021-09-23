---
image: https://xiangcaihua-blog.oss-cn-shanghai.aliyuncs.com/pic-go/airflow1.gif
layout: intro
theme: light-icons
highlighter: shiki
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
imageHeader: /static/airflow.svg
imageRight: /static/light-icons-cover.svg
---

# What is Airflow?

<layout-tag layout-name="image-header-intro"/>
<div class="leading-snug text-black dark:text-white text-opacity-60 dark:text-opacity-60 mt-4">
    Airflow 是一个由社区创建的平台,用于以编程方式创作、安排和监控工作流. 现已成为 Apache 顶级项目
    <light-icon icon="rocket" size="24px"/>
</div>

> 使用 python 语言编写的 data pipeline 调度和监控工作流的平台. Airflow 是通过 DAG(Directed acyclic graph 有向无环图)来管理任务流程的任务调度工具, 不需要知道业务数据的具体内容, 设置任务的依赖关系即可实现任务调度

### 关键词: DAG、任务调度、PYTHON

<style>
h1 {
  background-color: #2B90B6;
  font-size: 2.5rem !important;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
}
</style>

<!--
> Airflow is a platform created by the community to programmatically author, schedule and monitor workflows.
Airflow 是一个由社区创建的平台，用于以编程方式创作、安排和监控工作流。

- 🗓 **Scheduler(调度器)** - Scheduler 是一种使用 DAG 定义结合元数据中的任务状态来决定哪些任务需要被执行以及任务执行优先级的过程。调度器通常作为服务运行。
- 👷‍♂️ **Executor(执行器)** - Executor 是一个消息队列进程，它被绑定到调度器中，用于确定实际执行每个任务计划的工作进程。有不同类型的执行器，每个执行器都使用一个指定工作进程的类来执行任务。例如，LocalExecutor 使用与调度器进程在同一台机器上运行的并行进程执行任务。 其他像 CeleryExecutor 的执行器使用存在于独立的工作机器集群中的工作进程执行任务。
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion

Read more about [Why Slidev?](https://sli.dev/guide/why)
-->

---
layout: dynamic-image
image: https://source.unsplash.com/collection/94734566/1920x1080
equal: false
left: true
---

<div class="text-black dark:text-white text-opacity-60 dark:text-opacity-60 pt-2 font-sm">
    <span class="text-sm">
    Image at Left
    </span>
</div>
<div class="text-primary dark:text-primary pb-2 pt-2">
<span class="">
    A Simple Demo <light-icon icon="file-code"/>
</span>
</div>

```python {all|1-9|10-17|19-43|29-35|44|44}
default_args = {
    "owner": "airflow",
    "depends_on_past": True,
    "email": ["yunpeng.zhan@mail.hypers.com"],
    "email_on_failure": True,
    "email_on_retry": True,
    "retries": 1,
    "retry_delay": timedelta(minutes=5),
}
dag = DAG(
    "tutorial",
    default_args=default_args,
    description="A simple tutorial DAG",
    schedule_interval=timedelta(days=1),
    start_date=days_ago(2),
    tags=["example"],
)

t1 = BashOperator(task_id="print_date",bash_command="date",dag=dag,)

t2 = BashOperator(
    task_id="sleep",
    depends_on_past=False,
    bash_command="sleep 5",
    retries=3,
    dag=dag,
)

templated_command = """
  {% for i in range(5) %}
      echo "{{ ds }}"
      echo "{{ macros.ds_add(ds, 7)}}"
      echo "{{ params.my_param }}"
  {% endfor %}
"""

t3 = BashOperator(
    task_id="xit",
    depends_on_past=False,
    bash_command=templated_command,
    params={"my_param": "Parameter I passed in"},
    dag=dag,
)
t1 >> t2 >> t3

```
<uim-rocket class="text-3xl text-orange-400 animate-ping" />
<arrow v-click="6" x1="350" y1="330" x2="430" y2="470" color="#564" width="2" arrowSize="1"/>

<style>
    pre {
        max-height: 400px;
        overflow-y: auto;
        overflow-x: hidden;
    }
    ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
        background-color: rgba(240, 240, 240, 1)
    }
    code {
        counter-reset: step;
        counter-increment: step 0;
    }
    code .line::before {
        content: counter(step);
        counter-increment: step;
        width: 1rem;
        margin-right: 1.5rem;
        display: inline-block;
        text-align: right;
        color: rgba(115,138,148,.4)
    }
</style>

<!--
ads 

as

阿斯顿撒的

阿斯顿撒的

撒打算大撒
-->

---
layout: center-image
image: '/static/light-icons-screenshot.png'
---
  <layout-tag layout-name="center-image" />

  <div class="mb-4">
    <span class="text-3xl text-primary dark:text-primary" style="font-weight:500;" >Designed for Innovative Projects <light-icon icon="wand" /></span>
  </div>


---
layout: center-image
image: /static/claster.png
---

<layout-tag layout-name="center-image" />

  <div class="mb-4">
    <span class="text-3xl text-primary dark:text-primary" style="font-weight:500;" >Airflow 架构  <light-icon icon="wand" /></span>
  </div>

<!--
撒打算大
天天开心
-->

---
layout: center-image

---

<layout-tag layout-name="center-image" />

  <div class="mb-4">
    <span class="text-3xl text-primary dark:text-primary" style="font-weight:500;" >Airflow 架构 <light-icon icon="wand" /></span>
  </div>


<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
}
</style>

<!--
撒打算大
天天开心
-->



---
layout: center-image

---
# My Slide

<IconBox/>
<LightIcon icon="arrow-narrow-right" size="24px"/>

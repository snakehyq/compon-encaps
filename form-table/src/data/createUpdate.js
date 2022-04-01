import InputAttribute from '@/common/js/InputAttribute'
import DateAttribute from '@/common/js/DateAttribute'

export const layouComponents =  [
  {
    layout:'base',
    children: [
      {
        type: 'BaseInput',
        attr: new InputAttribute('unit', '申请单位:', '', 'text', true)
      },
      {
        type: 'BaseDate',
        attr: new DateAttribute('time', '申请时间:', 'Select date', true)
      },
      {
        type: 'BaseInput',
        attr: new InputAttribute('area', '申请原因:', '', 'textarea', true)
      }
    ]
  },
  {
    layout:'card-layout',
    config:{
      title:'申请调用人员信息',
      children:[
        {
          title:'人员信息',
          index: 1,
          children:[
            {
              type: 'BaseInput',
              attr: new InputAttribute('userName', '姓名:', '', 'text', true)
            },
            {
              type: 'BaseInput',
              attr: new InputAttribute('personUnit', '单位:', '', 'text', true)
            }
          ]
        }
      ],
    }
  },
  {
    layout:'table-layout',
    config:{
      title:'申请资源人员信息',
      children: [
        {
          type: 'index',
          label: '序号',
          width: '100px'
        },
        {
          label: '资源名称',
          prop: 'resourceName',
          columnItem: {
            type: 'BaseInput',
            attr: new InputAttribute('resourceName', '', '', 'text', false, '0px')
          }
        },
        {
          label: '数量',
          prop: 'account',
          columnItem: {
            type: 'BaseInput',
            attr: new InputAttribute('account', '', '', 'text', false, '0px')
          }
        }
      ]
    }
  }
]



















// 表单最上面的数
export const formComponent = [
  {
    type: 'BaseInput',
    attr: new InputAttribute('unit', '申请单位:', '', 'text', true)
  },
  {
    type: 'BaseDate',
    attr: new DateAttribute('time', '申请时间:', 'Select date', true)
  },
  {
    type: 'BaseInput',
    attr: new InputAttribute('area', '申请原因:', '', 'textarea', true)
  }
]
// 申请调用人员信息
export const personItem = {
  title: '人员信息',
  index: 1,
  pitem: [
    {
      type: 'BaseInput',
      attr: new InputAttribute('userName', '姓名:', '', 'text', true)
    },
    {
      type: 'BaseInput',
      attr: new InputAttribute('personUnit', '单位:', '', 'text', true)
    }
  ]
}
export const personComponent = {
  title: '申请调用人员信息',
  person: [
    personItem
  ]
}

// 申请调用资源信息
export const tableComponent = {
  title: '申请资源人员信息',
  tableColunm: [
    [
      {
        type: 'index',
        label: '序号',
        width: '100px'
      },
      {
        label: '资源名称',
        prop: 'resourceName',
        columnItem: {
          type: 'BaseInput',
          attr: new InputAttribute('resourceName', '', '', 'text', false, '0px')
        }
      },
      {
        label: '数量',
        prop: 'account',
        columnItem: {
          type: 'BaseInput',
          attr: new InputAttribute('account', '', '', 'text', false, '0px')
        }
      }
    ]
  ]
}

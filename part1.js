//Ex1


function PrintInOrder(Root)
{
  Treenode = Root
  function PrintHelper(TreeNode)
  {
    if (TreeNode === None)
    {
      return([]);
    }
    else
    {
      return( PrintHelper(TreeNode.left) + [TreeNode.data] + PrintHelper(TreeNode.right) );
    }
   }
}

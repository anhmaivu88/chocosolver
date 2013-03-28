package org.clafer.ir;

/**
 *
 * @author jimmy
 */
public interface IrConstraintVisitor<A, B> {

    public B visit(IrBoolConstraint ir, A a);

    public B visit(IrBoolChannel ir, A a);

    public B visit(IrIntChannel ir, A a);

    public B visit(IrSort ir, A a);

    public B visit(IrAllDifferent ir, A a);

    public B visit(IrSelectN ir, A a);
}